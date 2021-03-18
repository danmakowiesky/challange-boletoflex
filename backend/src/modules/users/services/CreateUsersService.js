
import UsersRepository from '../infra/repositories/UsersRepository'

class CreateCategoriesService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute(params, avatar) {
 
    const create = await this.usersRepository.create({
      ...params,
      avatar: avatar.filename,
    });

    return create;
  }
}

export default CreateCategoriesService;
