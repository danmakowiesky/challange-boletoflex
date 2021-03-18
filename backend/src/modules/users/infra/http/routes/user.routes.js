import express from 'express';
import multer from 'multer'
import multerConfig from '../../../../../config/multer'

import UsersController from '../controllers/UsersController';

const usersController = new UsersController();

const userRouter = express.Router();

const upload = multer(multerConfig)

userRouter.post('/create', upload.single('avatar'), usersController.create);

userRouter.get('/', usersController.fetch);


export default userRouter;