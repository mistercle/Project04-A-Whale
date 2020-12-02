const db = require('./db/user');

/*
 * 전체 유저 조회
 */
exports.getUsers = async (no) => {
  const users = await db.selectUsers(no);
  return users;
};

exports.searchUsers = async (keyword) => {
  const users = await db.searchUsers(keyword);
  return users;
};

exports.findUser = async (no) => {
  const user = await db.findUser(no);
  return user;
};
