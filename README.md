![Smash Blog Image](https://res.cloudinary.com/dqiipxzbh/image/upload/v1704879018/smash_pabsbr.png) 
# Smash Blog

Smash Blog is a user-friendly full-stack application built with React and Node.js. It offers an intuitive platform for readers to explore diverse blog posts and empowers content creators with easy-to-use Markdown formatting for writing, editing, and deleting posts. Join Smash Blog today to be part of a vibrant community that celebrates creativity and fosters connections through beautifully expressed words.s. Whether you're looking for details about your favorite films, television series, or want to learn more about your favorite actors and actresses, Infomovia has you covered.

## Demo Link

To experience the SmashBlog in action, check out our live demo [here](https://smash-blog.vercel.app/).

## Project Image

![Smash Blog Image](https://res.cloudinary.com/dqiipxzbh/image/upload/v1704878478/Screenshot_2024-01-10_at_1.13.58_AM_pc4dfu.png)

## Tech Stack

Infomovia is built using the following technologies:

### Frontend

- [![react](https://img.shields.io/badge/React-2B324C?style=for-the-badge&logo=React&logoColor=5ED2F3)](https://react.dev/) React framework for building efficient and scalable web applications.
- [![tailwindcss](https://img.shields.io/badge/TailwindCSS-37B7F1?style=for-the-badge&logo=TailwindCSS&logoColor=white)](https://tailwindcss.com/) A utility-first CSS framework for designing responsive and attractive user interfaces.
- [![radixui](https://img.shields.io/badge/RadixUI-8465F0?style=for-the-badge&logo=Radixui&logoColor=white)](https://www.radix-ui.com/) An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go.
- [![react-paginate](https://img.shields.io/badge/React_Paginate-2B324C?style=for-the-badge&logo=React-PaginateColor=white)](https://www.npmjs.com/package/react-paginate) React component to render markdown.

### Backend

- [![node](https://img.shields.io/badge/Node-6FA760?style=for-the-badge&logo=Node.js&logoColor=white)](https://nodejs.org/en) Flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [![express](https://img.shields.io/badge/Express-1F1F20?style=for-the-badge&logo=Express&logoColor=white)](https://expressjs.com/) Backend Framework.
- [![bcrypt](https://img.shields.io/badge/Bcrypt-2B324C?style=for-the-badge&logo=Bcrypt&logoColor=white)](https://github.com/kelektiv/node.bcrypt.js) For securely hashing user passwords.
- [![jwt](https://img.shields.io/badge/JWT-B52ECD?style=for-the-badge&logo=jsonwebtoken&logoColor=white)](https://jwt.io/) Used for encryption via jsonwebtokens.
- [![mongodb](https://img.shields.io/badge/MongoDB-4AA63A?style=for-the-badge&logo=MongoDB&logoColor=white)](https://www.mongodb.com/) A NoSQL database for storing and retrieving data efficiently.
- [![react-markdown](https://img.shields.io/badge/React_Markdown-2B324C?style=for-the-badge&logo=React-MarkdownColor=white)](https://www.npmjs.com/package/react-markdown) React component to render markdown.
- [![cloudinary](https://img.shields.io/badge/Cloudinary-3447C5?style=for-the-badge&logo=CloudinaryColor=white)](https://cloudinary.com/) Storing the images in a storage.

## Tools Used

In addition to the core technologies mentioned above, Infomovia also utilizes various tools and packages to enhance its functionality and development process. Some of these include:

- `react-loader-spinner`
- `timeago.js`
- `react-icons`
- `react-hot-toast`

## App Features

Smash blog features:

- **User Registration and Authentication**: Allow users to create accounts and log in securely to access personalized features and manage their posts.
- **Blog Post Creation**: Enable users to easily create new blog posts with a user-friendly editor that supports Markdown formatting for text styling.
- **Blog Post Editing**: Provide the ability to edit existing blog posts, making it convenient for authors to update their content.
- **Blog Post Deletion**: Allow authors to delete their posts if needed, maintaining control over their published content.

# How to use the Smash Blog App

## 1. For Front-end (Since I am using Vite)

### How to run the app

```
git clone https://github.com/sanixstudio/blog-app.git
cd blog-app
npm install
npm run dev
```

### Frontend Environment Variables `.env`

```
VITE_BASE_URL="provide your base url"
```

## 2. For Back-end
link to backend repo [https://github.com/sanixstudio/blog-app-backend.git](https://github.com/sanixstudio/blog-app-backend.git)
### How to run the app

```
git clone https://github.com/sanixstudio/blog-app-backend.git
cd blog-app-backend
npm install
npm run dev
```
### Backend Environment Variables `.env`

```
CLOUD_API_KEY="provide your cloudinary api key"
CLOUD_API_SECRET="provide your cloudinary api secret"
CLOUD_NAME="provide your cloudinary name"

JWT_SECRET="your jwt secret"

MONGODB_URI="your mongodb uri"
```
