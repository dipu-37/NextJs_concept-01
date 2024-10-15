import Link from 'next/link';
import React from 'react';

const Blogpage = () => {
    return (
        <div className='p-24'>
            {
                blogs.map(blog => (<div className='border-2 p-12' key={blog.suge}>
                    <h3>{blog.title}</h3>
                   <p> {blog.description}</p>
                    <button className=" bg-red-400 p-3"> <Link href={`/blogs/${blog.slug}`}>View Details</Link></button>
                </div>))
            }
        </div>
    );
};
const blogs = [
    {
      "slug": "introduction-to-mongodb",
      "title": "Introduction to MongoDB",
      "description": "Learn the basics of MongoDB, a NoSQL database for modern applications."
    },
    {
      "slug": "react-state-management",
      "title": "React State Management",
      "description": "An in-depth guide on managing state in React applications using useState and useReducer."
    },
    {
      "slug": "javascript-es6-features",
      "title": "JavaScript ES6 Features",
      "description": "Explore the new features introduced in ES6, including arrow functions, promises, and template literals."
    },
    {
      "slug": "restful-api-design",
      "title": "RESTful API Design",
      "description": "Best practices for designing RESTful APIs with proper structure, error handling, and scalability."
    },
    {
      "slug": "version-control-with-git",
      "title": "Version Control with Git",
      "description": "A beginner's guide to using Git for version control, covering topics such as branching and merging."
    }
  ]
  
  
export default Blogpage;