import { Router } from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";

const router = Router();

// Create Project
router.post("/register", createProject);

// Get All Projects
router.get("/", getProjects);

// Get Project By ID
router.get("/:id", getProjectById);

// Update Project
router.put("/:id", updateProject);

// Delete Project
router.delete("/:id", deleteProject);

export default router;
