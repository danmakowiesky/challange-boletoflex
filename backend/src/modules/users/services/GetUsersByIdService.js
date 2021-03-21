import UsersRepository from '../infra/repositories/UsersRepository';

class GetUsersByIdService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute(idUser) {
    const user = await this.usersRepository.findUserByid(idUser);
    return user;
  }
}

export default GetUsersByIdService;
