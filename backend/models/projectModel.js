import mongoose from "mongoose";
import User from "./userModel";
import Org from "./orgModel";

const projectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            default: ""
        },

        organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Org",
            required: true
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;