const { User } = require('../../models');

exports.selectUsers = async () => {
  const results = await User.findAll({
    attributes: ['no', 'id'],
    raw: true,
  });

  return results;
};

exports.searchUsers = async (keyword) => {
  const results = await User.findAll({
    attributes: ['no', 'nickname', 'profile_url'],
    raw: true,
  });
};

exports.findUser = async (no) => {
  const results = await User.findAll({
    attributes: ['no', 'nickname', 'profile_url', 'description', 'rank'],
    where: {
      no,
    },
    raw: true,
  });

  return results;
};
