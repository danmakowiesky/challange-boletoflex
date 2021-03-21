import UsersRepository from '../infra/repositories/UsersRepository';

class GetUsersService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute() {
    const fetchUser = await this.usersRepository.fetch();
    return fetchUser;
  }
}

export default GetUsersService;
