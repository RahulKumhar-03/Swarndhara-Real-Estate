import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import {DatePicker} from '@mantine/dates'
import { useMutation } from "react-query";
import UserDetailContext from '../../Context/UserDetailContext'
import { bookVisit } from "../../utils/api.js";
import { toast } from "react-toastify";
import dayjs from "dayjs";
const BookingModal = ({ opened, setOpened, propertyId, email }) => {

    const [dateValue,setDateValue] = useState(null)
    const {userDetails:{token},setUserDetails} = useContext(UserDetailContext)

    const handleBookingSuccess = () =>{
        toast.success("Visit Successfully Scheduled.",{position:"bottom-right"});
        setUserDetails((prev)=>({
            ...prev,
            bookings:[
                ...prev.bookings,
                {
                    id: propertyId, date: dayjs(dateValue).format('DD/MM/YYYY')
                }
            ]
    }))
    };

    const {mutate, isLoading} = useMutation({
        mutationFn: ()=>bookVisit(dateValue, propertyId, email, token),
        onSuccess: ()=>handleBookingSuccess(),
        onError: ({response}) => toast.error(response.data.message),
        onSettled: ()=> setOpened(false)
    })
  return (
    <Modal
      opened={opened}
      onClose={() => {
        setOpened(false);
      }}
      title="Select your date of visit"
      centered
    >
      <div className="flexColCenter" style={{gap:"1rem"}}>
         <DatePicker value={dateValue} onChange={setDateValue} minDate={new Date()}/>
         <Button disabled={!dateValue || isLoading} onClick={()=>mutate()}>
            Book Visit!
         </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
