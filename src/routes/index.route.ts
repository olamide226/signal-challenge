import { Router } from 'express';
const router = Router();
import { createTicketSchema } from '../middlewares/validators/indexValidator.middleware'

import { defaultController } from '../controllers/index.controller';


// router.get('/', indexWelcome);
router.post('/', createTicketSchema, defaultController);

export default router;