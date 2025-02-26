import { Container, Modal, Stepper } from "@mantine/core";
import React, { useState } from "react";
import AddLocation from "../AddLocation/AddLocation";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "../UploadImage/UploadImage";
import PropertyBasicDetails from "../PropertyBasicDetails/PropertyBasicDetails";
import Facilities from "../Facilities/Facilities";

const AddPropertyModal = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  const { user } = useAuth0();
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    image: null,
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
    userEmail: user?.email,
  });
  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current));
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  return (
    <Modal
      opened={opened}
      onClose={() => {
        setOpened(false);
      }}
      size={"90rem"}
    >
      <Container h={"40rem"} w={"100%"}>
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          allowNextStepsSelect={false}
        >
          <Stepper.Step label="Location" description="Address">
            <AddLocation
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Upload Images" description="Images">
            <UploadImage
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              prevStep={prevStep}
            />
          </Stepper.Step>
          <Stepper.Step
            label="Property Details"
            description="Add Basic Details"
          >
            <PropertyBasicDetails
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          </Stepper.Step>
          <Stepper.Step label="Facilities" description="Add facilities">
            <Facilities
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              setActive={setActive}
              setOpened={setOpened}
            />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
