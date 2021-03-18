import express from 'express';

import UsersController from '../controllers/UsersController';

const usersController = new UsersController();

const userRouter = express.Router();

userRouter.post('/create', usersController.create);

userRouter.get('/fetch', usersController.fetch);


export default userRouter;
