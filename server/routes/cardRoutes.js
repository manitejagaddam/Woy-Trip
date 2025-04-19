import express from "express";
import { uploadImages } from "../middlewares/uploadMiddleware.js";
import {
  createCard,
  getCards,
  updateCard,
  deleteCard,
} from "../controllers/cardController.js";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post("/upload", upload.array("images"), uploadImages(true), createCard);
router.get("/", getCards);
router.put("/:id", upload.array("images"), uploadImages(false), updateCard);
router.delete("/:id", deleteCard);

export default router;
