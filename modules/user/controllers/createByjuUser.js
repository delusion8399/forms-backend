const ApiResponse = require('../../../utils/apiResponse');
const byju = require('../../models/byju');

async function createByjuUser(payload) {
  try {
    await byju.create(payload);
    return ApiResponse('SUCCESS');
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = createByjuUser;
