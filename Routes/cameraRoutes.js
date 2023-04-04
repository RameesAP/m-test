import express from 'express'
import { addcam, getcams } from '../Controllers/camerasController.js'

const router =express.Router()

router.post('/addcam',addcam)
router.get('/getcams',getcams)


export default router