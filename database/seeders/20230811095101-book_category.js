'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('book_category', [{
      book_id: 1,
      category_id: 1,
    },
    {
      book_id: 1,
      category_id: 2,
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('book_category', null, {});
  },
};
