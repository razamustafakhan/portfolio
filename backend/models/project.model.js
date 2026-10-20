import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    githubLink: {
      type: String,
      trim: true,
    },

    mainLink: {
      type: String,
      trim: true,
    },

    languages: {
      type: [String], // Array of technologies
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
