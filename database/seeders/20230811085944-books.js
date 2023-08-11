'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('books', [{
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      total_pages: 100,
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('books', null, {});
  },
};
