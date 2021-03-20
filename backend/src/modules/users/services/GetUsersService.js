import UsersRepository from '../infra/repositories/UsersRepository'

class GetUsersService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute({idUser}) {
    const fetchUser = await this.usersRepository.fetch(idUser);
    return fetchUser;
  }
}

export default GetUsersService;
