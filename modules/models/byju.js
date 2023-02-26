/* eslint-disable prefer-destructuring */
const { Schema } = require('mongoose');
const { connectedDbs } = require('../../utils/database');

/** @type import('mongoose'); */
const backend = connectedDbs.byjus;

const schema = new Schema({
  studentName: {
    type: String,
    required: true,
  },

  parentName: {
    required: true,
    type: String,
  },
  schoolName: {
    required: true,
    type: String,
  },
  parentPhone: {
    required: true,
    type: String,
  },
  className: {
    required: true,
    type: String,
  },
  dateOfExam: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'Not to disclose'],
  },
});

/** @type {import('mongoose').Model<any, any>} */
module.exports = backend.model('byju_user', schema);
