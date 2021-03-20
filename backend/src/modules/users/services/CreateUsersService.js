import UsersRepository from '../infra/repositories/UsersRepository';

class CreateCategoriesService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute(params, avatar) {
    const existsUserCPF = await this.usersRepository.fetch(params);

    if (existsUserCPF) {
      throw new Error('There is a registered user with this cpf');
    }

    const user = await this.usersRepository.create({
      ...params,
      avatar: avatar.filename,
    });

    return user;
  }
}

export default CreateCategoriesService;
