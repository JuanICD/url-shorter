import { Router } from 'express';
import { createURL, getOriginalUrl } from "../controllers/urlController.js";

const router:Router = Router();


router.post('/shorten',createURL)

router.get('/:code',getOriginalUrl)

export default router;