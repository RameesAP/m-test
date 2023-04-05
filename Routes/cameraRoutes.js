import express from 'express'
import { addCam, deleteCam, getCam, getCams, updateCam } from '../Controllers/camerasController.js'

const router =express.Router()


//camerasRoutes
router.post('/addcam',addCam)
router.get('/getcams',getCams)
router.get('/getcam/:id',getCam)
router.put('/updatecam/:id',updateCam)
router.delete('/deletecam/:id',deleteCam)


export default router