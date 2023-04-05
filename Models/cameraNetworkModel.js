import mongoose from "mongoose";

const cameraNetworksSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        cameras: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cameras',
        }],
        created: {
            type: Date,
            required: true,
            default: Date.now()
        }

    }
)

const networkModel = mongoose.model("Networks", cameraNetworksSchema)
export default networkModel