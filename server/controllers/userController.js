import asyncHandler from 'express-async-handler'

import { prisma } from "../config/prismaConfig.js"

export const createUser = asyncHandler(async (req, res) =>{
    console.log("Creating User")
    let {email} = req.body;

    const userExists = await prisma.user.findUnique({where:{email : email}});

    if(!userExists){
        const user = await prisma.user.create({data: req.body});
        
        res.send({
            message: "User Successfully Registered",
            user: user,
        });
    }
    else res.status(201).send({message:"User Already Registered"});

})

export const bookVisit = asyncHandler(async(req, res) => {
    const {email, date} = req.body;
    const {id} = req.params;
    try {
        const alreadyBooked = await prisma.user.findUnique({
            where: {email: email},
            select: {bookedVisits: true}
        })
        if(alreadyBooked.bookedVisits.some((visit) => visit.id === id)){
            res.status(400).send("Visit already scheduled by you");
        }
        else{
            await prisma.user.update({
                where:{email: email},
                data:{
                    bookedVisits:{push:{id, date}}
                }
            })
            res.send("Visit successfully scheduled.")
        }
    } catch (error) {
        throw new Error(error.message)
    }
})

export const getAllBookings = asyncHandler(async(req, res) => {
    const {email} = req.body;
    try {
        const bookings = await prisma.user.findUnique({
            where:{email: email},
            select: {bookedVisits: true}
        })
        res.status(200).send(bookings)
    } catch (error) {
        throw new Error(error.message)
    }
})

export const cancelBooking = asyncHandler(async (req, res) => {
    const {email} = req.body;
    const {id} = req.params;
    try {
        const userBookedId = await prisma.user.findUnique({
            where:{email: email},
            select:{bookedVisits: true}
        })
        const indexToDelete = userBookedId.bookedVisits.findIndex((visit) => visit.id === id)
        if(indexToDelete === -1){
            res.status(404).json({message: "Booking not found"});
        }
        else{
            userBookedId.bookedVisits.splice(indexToDelete,1);
            await prisma.user.update({
                where:{email: email},
                data:{
                    bookedVisits: userBookedId.bookedVisits
                }
            })
            res.send("Booking Cancelled")
        }
    } catch (error) {
        throw new Error(error.message)
    }
})

export const toFav = asyncHandler(async (req, res) => {
    const {email} = req.body;
    const {rid} = req.params;
    try {
        const user = await prisma.user.findUnique({
            where:{email: email}
        })
        if(user.favResidenciesID.includes(rid)){
            const updatedUser = await prisma.user.update({
                where:{email: email},
                data:{
                    favResidenciesID:{
                        set: user.favResidenciesID.filter((id) => id !== rid)
                    }
                }
            })
            res.send({message:"Removed from favourites",user: updatedUser})
        }
        else{
            const updatedUser = await prisma.user.update({
                where:{email: email},
                data:{
                    favResidenciesID:{
                        push: rid
                    }
                }
            })
            res.send({message:"Upadated favourites",user: updatedUser})
        }
    } catch (error) {
        throw new Error(error.message)
    }
})

export const allFavResd = asyncHandler(async (req, res) => {
    const {email} = req.body;
    try {
        const allFavList = await prisma.user.findUnique({
            where: {email: email},
            select: {favResidenciesID: true}
        })
        res.status(200).send(allFavList)
    } catch (error) {
        throw new Error(error.message)
    }
})