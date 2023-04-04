import camerasModel from '../Models/camerasModel.js'


export const addcam=async(req,res)=>{
    const newCam = new camerasModel(req.body)
    try {
        await newCam.save()
        res.status(200).json(newCam)
    } catch (error) {
        res.status(500).json(error)
    }
}


export const getcams=async(req,res)=>{
    try {
        const cams=await camerasModel.find()
        res.status(200).json(cams)
    } catch (error) {
        res.status(500).json(error)
    }
}

