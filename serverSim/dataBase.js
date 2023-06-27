function dataBase() {
  //test database

  // const users = [];
  // users[0] = {
  //   id: users.length,
  //   email: 'test@test.com',
  //   password: 'password',
  //   userName: 'test',
  //   sesionToken: '',
  // };
  // users[1] = {
  //   id: users.length,
  //   email: 'test@test1.com',
  //   password: 'password',
  //   userName: 'test1',
  //   sesionToken: '6a4b773e-6b65-4cf3-9270-e62214180f4a',
  // };
  // localStorage.setItem('users', JSON.stringify(users));

  const savedUsers = JSON.parse(localStorage.getItem('users'));
  //localStorage.removeItem('donors');
  console.log('savedUsers-valid file', savedUsers);
  return savedUsers;
}

export default dataBase;
