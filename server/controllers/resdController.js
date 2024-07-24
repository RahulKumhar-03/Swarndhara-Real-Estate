import asynchandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asynchandler(async (req, res) => {
  const {
    title,
    description,
    address,
    price,
    country,
    city,
    facilities,
    image,
    owner,
  } = req.body;
  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        address,
        price,
        country,
        city,
        facilities,
        image,
        owner: { connect: { email: owner.connect.email }, },
      },
    });

    res.send({ message: "Residency Created Successfully", residency });
  } catch (error) {
    if (error.code == "P2002") {
      throw new Error("Residency with address already exists");
    }
    throw new Error(error.message);
  }
});
//function to get all residencies
export const getAllResidencies = asynchandler(async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(residencies);
});

//function to specific residency
export const getResidency = asynchandler(async (req, res) => {
  const { id } = req.params;
  try {
    const residency = await prisma.residency.findUnique({ 
        where: { id: id },
     });
    res.send(residency);
  } catch (error) {
    throw new Error(error.message);
  }
});
