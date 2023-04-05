import networkModel from "../Models/cameraNetworkModel.js";

//create
export const addNetCam = async (req, res) => {
    const newCam = new networkModel(req.body)
    console.log(newCam);
    try {
        await newCam.save()
        res.status(200).json(newCam)
    } catch (error) {
        res.status(400).json(error)
    }
}
//getAll
export const getNetCams = async (req, res) => {
    try {
        const allNetCams = await networkModel.find()
        res.status(200).json(allNetCams)
    } catch (error) {
        res.status(400).json(error)
    }

}
//getSpecific
export const getNetCam = async (req, res) => {
    const id = req.params.id
    try {
        const netCam = await networkModel.findById(id).populate("cameras")
        res.status(200).json(netCam)
    } catch (error) {
        res.status(400).json(error)
    }
}
//updateSpecific
export const updateNetCam = async (req, res) => {
    const id = req.params.id
    const update = req.body
    try {
        const updateNetCam = await networkModel.findByIdAndUpdate(id, update, { new: true })
        res.status(200).json(updateNetCam)
    } catch (error) {
        res.status(400).json(error)
    }
}
//deleteSpecific
export const deleteNetCam = async (req, res) => {
    const id = req.params.id
    try {
        const deleteCam=await networkModel.findById(id)
        await deleteCam.deleteOne()
        res.status(200).json("NetCam deleted Successfully")
    } catch (error) {
        res.status(400).json(error)
    }
}