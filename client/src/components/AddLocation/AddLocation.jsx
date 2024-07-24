import React from "react";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";
import { Button, Group, Select, TextInput } from "@mantine/core";
import useCountries from "../../hooks/useCountries";
import Map from "../Map/Map";

const AddLocation = ({ nextStep, propertyDetails, setPropertyDetails }) => {
  const { getAllCountries } = useCountries();
  const form = useForm({
    initialValues: {
      country: propertyDetails?.country,
      city: propertyDetails?.city,
      address: propertyDetails?.address,
    },
    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });
  const { country, city, address } = form.values;
  
  const handleSubmit = () => {
    const {hasErrors} = form.validate();
    if(!hasErrors){
        setPropertyDetails((prev)=>({...prev, country, city, address}))
        nextStep();
    }
  }

  return (
    <form
     onSubmit={(e)=>{
       e.preventDefault();
       handleSubmit();
      }}
    >
      <div className="flexCenter"style={{
        gap:"3rem",
        marginTop:"3rem",
        justifyContent:"space-between",
        }}
      >
        {/*left side */}
        {/*input*/}
        <div className="flexColStart">
          <Select
            clearable
            w={"100%"}
            withAsterisk
            label="Country"
            searchable
            data={getAllCountries()}
            {...form.getInputProps("country", { type: "input" })}
          />

          <TextInput
            withAsterisk
            label="City"
            w={"100%"}
            {...form.getInputProps("city", { type: "input" })}
          />

          <TextInput
            withAsterisk
            label="Address"
            w={"100%"}
            {...form.getInputProps("address", { type: "input" })}
          />
        </div>
        {/*right side */}
        <div style={{flex:1}}>
          <Map address={address} counrty={country} city={city} />
        </div>
      </div>
      <Group mt={"xl"} position="center">
        <Button type="submit">Next Step!</Button>
      </Group>
    </form>
  );
};

export default AddLocation;
