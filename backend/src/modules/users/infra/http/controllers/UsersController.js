import * as Yup from 'yup';
import GetUsersService from '../../../services/GetUsersService';
import GetUsersByIdService from '../../../services/GetUsersByIdService';
import CreateUsersService from '../../../services/CreateUsersService';

const base64ToImage = require('base64-to-image');

class UsersController {
  async create(req, res) {
    try {
      const { body, file } = req;

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().required(),
        cpf: Yup.string().required(),
        profession: Yup.string().required(),
      });

      const isValid = schema.isValidSync(body);

      if (!isValid) {
        const validate = schema.validateSync(body);
        return res.status(400).json({ message: validate });
      }

      const avatar = file;

      const createUsersService = new CreateUsersService();
      const result = await createUsersService.execute(body, avatar);

      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async fetch(req, res) {
    try {
      const schema = Yup.object().shape({
        idUser: Yup.number().notRequired(),
      });

      const isValid = schema.isValidSync(req.query);

      if (!isValid) {
        const validate = schema.validateSync(req.query);
        return res.status(400).json({ message: validate });
      }
      const getUsersService = new GetUsersService();
      const getUsersByIdService = new GetUsersByIdService();

      const { idUser } = req.query;

      if (idUser) {
        const result = await getUsersByIdService.execute(idUser);
        return res.json(result);
      }
      const result = await getUsersService.execute();
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default UsersController;
