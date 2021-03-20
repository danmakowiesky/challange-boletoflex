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

  async fetch(params) {
    const fetchUsers = await this.db.from(`${REPOSITORY}`).modify(query => {
      if (params.idUser) {
        query.andWhere('id', params.idUser);
      }

      if (params.cpf) {
        query.andWhere('cpf', params.cpf);
      }
    });
    return fetchUsers;
  }
}

export default UsersRepository;
