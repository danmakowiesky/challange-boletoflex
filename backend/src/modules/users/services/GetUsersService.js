import UsersRepository from '../infra/repositories/UsersRepository'

class GetUsersService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute() {
    const findAllUsers = await this.usersRepository.findAll();
    return findAllUsers;
  }
}

export default GetUsersService;
