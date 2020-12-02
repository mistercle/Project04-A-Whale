const { OK } = require('../../config/statusCode').statusCode;
const userServices = require('../../services/user');

/*
    GET /api/user/list
    * 전체 사용자 목록 조회 API
*/
exports.getUsers = async (req, res, next) => {
  try {
    const users = await userServices.getUsers();

    res.status(OK).json({
      message: '전체 사용자 목록 조회 성공',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

exports.findUser = async (req, res, next) => {
  try {
    const { no } = req.params;
    console.log(no);
    const users = await userServices.findUser(no);

    res.status(OK).json({
      message: '전체 사용자 목록 조회 성공',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

exports.searchUsers = async (req, res, next) => {
  try {
    const { keyword } = req.param;
    const users = await userServices.searchUsers(keyword);

    res.status(OK).json({
      message: '전체 사용자 목록 조회 성공',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};
