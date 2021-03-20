import { Router } from 'express';
import usersRouter from '../../../../modules/users/infra/http/routes/user.routes';

const apiRouter = Router();

apiRouter.use('/user', usersRouter);

export default apiRouter;
