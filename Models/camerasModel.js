import mongoose from "mongoose";

const camerasSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        },
        created:{
            type:Date,
            required:true,
            default:Date.now()
        }

    }
)

const camerasModel =mongoose.model('Cameras',camerasSchema)
export default camerasModel