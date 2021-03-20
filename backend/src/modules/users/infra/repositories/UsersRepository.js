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

  async fetch(idUser) {
    const fetchUsers = await this.db.from(`${REPOSITORY}`).modify(query => {
      if (idUser) {
        query.andWhere('id', idUser);
      }
    });
    return fetchUsers;
  }
}

export default UsersRepository;
