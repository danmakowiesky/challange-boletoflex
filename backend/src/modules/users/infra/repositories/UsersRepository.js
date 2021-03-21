import { knex } from '../../../../shared/infra/knex/index';

const REPOSITORY = 'users';

class UsersRepository {
  constructor() {
    this.db = knex(REPOSITORY);
  }

  async create(params) {
    const users = await this.db.insert(params).returning('*');
    return users;
  }

  async fetch() {
    const fetchUsers = await this.db.from(`${REPOSITORY}`);
    return fetchUsers;
  }

  async findUserByid(idUser) {
    const findUser = await this.db.from(`${REPOSITORY}`).where('id', idUser);
    return findUser;
  }
}

export default UsersRepository;
