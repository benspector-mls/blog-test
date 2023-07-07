import './App.css'

import { useState, useEffect } from 'react';
import MarkdownViewer from './components/MarkdownViewer';

const getPostOptions = (body) => ({
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

function App() {
  const [blogs, setBlogs] = useState([]);
  const [text, setText] = useState('');
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogAuthor, setNewBlogAuthor] = useState('');
  const [newBlogFile, setNewBlogFile] = useState(null);
  
  const selectBlog = (e) => {
    e.preventDefault();

    const blog = blogs.find(blog => blog.id === Number(e.target.value));
    setText(blog.text);
  }

  const uploadFile = async (e) => {
    e.preventDefault();

    const fileContent = await newBlogFile.text();
    const body = { 
      title: newBlogTitle,
      author: newBlogAuthor,
      text: fileContent
    }
    fetch('/api/blogs', getPostOptions(body))
  }

  useEffect(() => {
    fetch('/api/blogs').then((response) => response.json()).then((data) => { setBlogs(data) })
  }, []);

  return(
    <div>
      <form onSubmit={uploadFile}>
        <input
          type="text"
          value={newBlogTitle}
          onChange={(e) => setNewBlogTitle(e.target.value)}
          placeholder='Blog Title'
        />
        <input
          type="text"
          value={newBlogAuthor}
          onChange={(e) => setNewBlogAuthor(e.target.value)}
          placeholder='Blog Author'
        />
        <input
          type="file"
          onChange={(e) => setNewBlogFile(e.target.files[0])}
        />
        <input 
          type='submit'
          value='submit'
        />
        
      </form>

      <label htmlFor="blog-select">Choose a blog:</label> 
      <select name="blog-select" id="blog-select" onChange={selectBlog}> 
        <option key={-1} value={-1}>Select</option>
        {
          blogs.map(blog => <option key={blog.id} value={blog.id}>{blog.title}</option>)
        }
      </select>
    
      <MarkdownViewer text={text}/>
    </div>
  )
}

export default App
