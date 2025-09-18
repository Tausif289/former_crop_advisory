import express from "express";
import { getTranslations } from "../controller/translationController.js";

const router = express.Router();

// GET translations for a language
router.get("/:lng", getTranslations);

export default router;
