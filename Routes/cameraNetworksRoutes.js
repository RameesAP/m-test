import express from 'express'
import { addNetCam, deleteNetCam, getNetCam, getNetCams, updateNetCam } from '../Controllers/networkControllers.js'

const router =express.Router()

//cameraNetworksRoutes
router.post('/addnetcam',addNetCam)
router.get('/getnetcams',getNetCams)
router.get('/getnetcam/:id',getNetCam)
router.put('/upnetcam/:id',updateNetCam)
router.delete('/deletenetcam/:id',deleteNetCam)


export default router