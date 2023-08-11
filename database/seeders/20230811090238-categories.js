'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [{
      category_name: 'fiction',
    },
    {
      category_name: 'adventure',
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  },
};
