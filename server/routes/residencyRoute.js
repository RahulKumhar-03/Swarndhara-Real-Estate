import express from 'express'
import {createResidency, getAllResidencies, getResidency} from '../controllers/resdController.js'
import jwtCheck from '../config/auth0Config.js'

const router = express.Router()
 
router.post('/create',jwtCheck, createResidency)
router.get('/allResd', getAllResidencies)
router.get("/:id", getResidency)
export {router as residencyRouter}