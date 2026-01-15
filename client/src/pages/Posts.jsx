import { useState } from "react";
import { useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data); // <-- FIX
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {posts.length > 0 ? (
        <div className="flex flex-col justify-center items-center">
          {posts.map((user) =>
            user.posts.map((post) => (
              <div key={post.id}>
                <div className="m-4 flex flex-row items-center gap-2">
                  <img
                    className="dp rounded-full"
                    src={user.profilePic}
                    alt="Profile pic"
                  />
                  <h5 className="text-center text-[14px] font-bold">
                    {user.username}
                  </h5>
                </div>
                <img className="post" src={post.image} alt="" />

                <div className="m-4">
                  <div className="flex flex-row gap-4 w-6">
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/ios/50/like--v1.png"
                      alt="like--v1"
                    />

                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/ios/50/topic--v1.png"
                      alt="topic--v1"
                    />

                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/ios/50/sent--v1.png"
                      alt="sent--v1"
                    />
                  </div>

                  <p>
                    {post.likes}
                    <span> </span>likes
                  </p>
                  <h1>
                    <span className="font-bold">{user.username} </span>
                    {post.caption}
                  </h1>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};
export default Posts;
