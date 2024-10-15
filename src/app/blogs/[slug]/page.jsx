import React from 'react';

const page = ({params}) => {
    console.log(params.slug)
    const {title,description} = blogs.find((blog)=>blog.slug == params.slug);
    return (
        <div>
           <h4>{title}</h4>
           <h5>{description}</h5>
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

export default page;