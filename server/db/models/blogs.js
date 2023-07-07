const knex = require('../knex');

class Blogs {
  static async list() {
    const query = 'SELECT * FROM blogs';
    const { rows } = await knex.raw(query);
    return [rows, null];
  }

  static async create(title, author, text) {
    try {
      const query = 'INSERT INTO blogs (title, author, text) VALUES (?, ?, ?) RETURNING *;'
      const { rows } = await knex.raw(query, [title, author, text]);
      return [rows, null];
    } catch (err) {
      console.log(err);
      return [null, err];
    }
  }
}

module.exports = Blogs;