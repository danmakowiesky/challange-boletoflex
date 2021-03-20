import GetUsersService from './GetUsersService';

const getUsers = new GetUsersService();
describe('Get User By Id', () => {
  it('should get User By Id', async () => {
    const objUser = { idUser: '1' };
    const result = await getUsers.execute(objUser);
    expect(result).toEqual([
      {
        id: 1,
        name: 'Daniel',
        email: 'daniel@email.com',
        phone: '48984588543',
        avatar: '13cabb0b0274243dd6b4cad95c1f8ce7.jpg',
        cpf: '09394594393',
        profession: 'Software Enginner',
      },
    ]);
  });
});
