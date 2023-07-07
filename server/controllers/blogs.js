const Blogs = require('../db/models/blogs');

const list = async (req, res) => {
  const [blogs, error] = await Blogs.list();
  if (!error) res.send(blogs);
  else res.sendStatus(404);
}

const create = async (req, res) => {
  const { title, author, text } = req.body
  console.log(req.body);
  const [newBlog, error] = await Blogs.create(title, author, text);
  if (!error) res.sendStatus(201);
  else res.sendStatus(404);
}

module.exports = {
  list,
  create
}