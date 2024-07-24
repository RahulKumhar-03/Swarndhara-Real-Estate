import express from 'express'
import { createUser,bookVisit, getAllBookings, cancelBooking, toFav, allFavResd } from '../controllers/userController.js'
import jwtCheck from '../config/auth0Config.js'
const router = express.Router()
  
router.post("/register", jwtCheck, createUser)
router.post("/bookVisit/:id", jwtCheck, bookVisit)
router.post('/allBookings', getAllBookings)
router.post('/cancelBooking/:id',jwtCheck, cancelBooking)
router.post('/toFav/:rid',jwtCheck, toFav) 
router.post('/allFavResd',jwtCheck, allFavResd)
export {router as userRoute}