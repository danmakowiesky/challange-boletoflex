import { knex } from '../../../../shared/infra/knex/index';

const REPOSITORY = 'users';

class UsersRepository {
  constructor() {
    this.db = knex(REPOSITORY);
  }

  async create(params) {
    console.log(params)
    const users = await this.db.insert(params).returning('*');
    return users;
  }

  async findAll() {
    const findAllUsers = this.db.returning('*')
    return findAllUsers;
  }


}

export default UsersRepository;
