import UsersRepository from '../infra/repositories/UsersRepository';

class CreateCategoriesService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute(params, avatar) {
    console.log(avatar);
    const user = await this.usersRepository.create({
      ...params,
      avatar: avatar.filename,
    });

    return user;
  }
}

export default CreateCategoriesService;
