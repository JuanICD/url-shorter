import {Router} from 'express';
import {createURL, getURL} from "../controllers/urlController.js";

const router:Router = Router();

router.post('/shorten',createURL)

router.get('/',getURL)
export default router;