import camerasModel from '../Models/camerasModel.js'
import networkModel from "../Models/cameraNetworkModel.js";

//create
export const addCam = async (req, res) => {
    const newCam = new camerasModel(req.body)
    try {
        await newCam.save()
        res.status(200).json(newCam)
    } catch (error) {
        res.status(400).json(error)
    }
}
//getAll
export const getCams = async (req, res) => {
    try {
        const cams = await camerasModel.find()
        res.status(200).json(cams)
    } catch (error) {
        res.status(400).json(error)
    }
}
//getSpecific
export const getCam = async (req, res) => {
    const camId = req.params.id
    try {
        const cam = await camerasModel.findById(camId)
        res.status(200).json(cam)
    } catch (error) {
        res.status(400).json(error)
    }
}
//update
export const updateCam = async (req, res) => {
    const id = req.params.id
    const update = req.body

    try {
        const updateCam = await camerasModel.findByIdAndUpdate(id, update, { new: true })
        res.status(200).json(updateCam)
    } catch (error) {
        res.status(400).json(error)
    }
}
//delete
export const deleteCam = async (req,res)=>{
    const id =req.params.id
    try {
        const cam=await camerasModel.findById(id)
        // Remove camera from all networks
        await networkModel.updateMany({},{ $pull: { cam: id } })
        // Remove camera from CameraNetworks table
        await camerasModel.deleteMany({cam: id})
         // Delete camera from Camera table
        await cam.deleteOne()
        res.status(200).json("Post Deleted Successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}
