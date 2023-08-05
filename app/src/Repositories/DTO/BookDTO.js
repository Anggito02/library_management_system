/* eslint-disable require-jsdoc */
class BookDTO {
  constructor(id, title, author, totalPages) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
  }
};

module.exports = BookDTO;
