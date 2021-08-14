import { Router } from 'express';
const router = Router();

import { indexWelcome } from '../controllers/index.controller';


router.get('/', indexWelcome);
router.post('/nationality', indexWelcome);

export default router;