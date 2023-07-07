/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('blogs').del()
  await knex('blogs').insert([
    { title: 'chapter 1', author: 'Ben Spector', text: '# Chapter 1\nFirst' },
    { title: 'chapter 2', author: 'Ben Spector', text: '# Chapter 2\nSecond' },
  ]);
};
