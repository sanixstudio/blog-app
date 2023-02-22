import React from "react";

const data = [
  {
    userId: 1,
    author: "Adnan Niaz",
    dataPosted: Date.now(),
    image: "https://picsum.photos/id/237/800/600",
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    author: "Sanam Haq",
    dataPosted: Date.now(),
    image: "https://picsum.photos/id/27/800/600",
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    author: "Nooh Haq",
    dataPosted: Date.now(),
    image: "https://picsum.photos/id/437/800/600",
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    author: "Abdul Haq",
    dataPosted: Date.now(),
    image: "https://picsum.photos/id/737/800/600",
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    author: "Amna Haq",
    dataPosted: Date.now(),
    image: "https://picsum.photos/id/37/800/600",
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
];

const Posts = () => {
  return (
    <>
      {data.map((post) => (
        <div
          key={post.id}
          className="flex flex-col items-center md:justify-between text-center md:text-left md:flex-row gap-5 mx-auto my-0 max-w-screen-xl mt-20 px-4"
        >
          <img width={400} src={post.image} alt="cutie" />
          <div>
            <a href="/">
              <h1 className="text-4xl font-bold">{post.title}</h1>
            </a>
            <span className="font-bold inline-block mr-2 my-4 text-gray-600">
              {post.author}
            </span>
            <span className="font-bold text-gray-400">
              {new Date(post.dataPosted).toLocaleDateString()}
            </span>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
