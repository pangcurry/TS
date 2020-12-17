import * as express from 'express';
import signin from './signin/signin';
import info from './signin/info';
import token from './signin/token';

const router = express.Router();

router.use('/signin',signin);
router.use('/info',info);
router.use('/token',token);

export default router;