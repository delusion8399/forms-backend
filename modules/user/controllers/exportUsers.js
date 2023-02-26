const XLSX = require('xlsx');
const ApiResponse = require('../../../utils/apiResponse');
const byju = require('../../models/byju');

async function exportUsers() {
  const allUsers = await byju.find({}, { _id: 0, __v: 0 }).lean();

  const worksheet = XLSX.utils.json_to_sheet([]);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.sheet_add_json(worksheet, allUsers, { origin: 'A1' });

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Students Data');

  const xlsx = XLSX.write(workbook, { type: 'binary', bookType: 'xlsx' });

  return ApiResponse('SUCCESS', xlsx);
}

module.exports = exportUsers;
