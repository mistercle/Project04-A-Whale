const db = require('./db/user');

/*
 * 전체 유저 조회
 */
exports.getUsers = async () => {
  const users = await db.selectUsers();
  return users;
};

exports.searchUsers = async ( keyword ) => {
  const users = await db.searchUsers(keyword);
  return users;
}

exports.getUserbyNo = async ( no ) => {
  const user = await db.getUserbyNo(no);
  return user;
}