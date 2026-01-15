import { useEffect, useState } from "react";
import Feed from "./Feed";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex flex-row">
        {stories.length > 0 ? (
          stories.map((story) => (
            <div className="m-2" key={story.id}>
             <div className="story-ring ">
                 <img src={story.profilePic} alt="dp"  />
             </div>
              <p className="story-username text-center">{story.username}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Stories;
