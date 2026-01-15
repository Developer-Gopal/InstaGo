import Stories from "./Stories";
import Posts from "./Posts";

const Feed = () => {
  return (
    <>
      <div className="">
        <Stories />
      </div>

      <div>
        <Posts />
      </div>
    </>
  );
};

export default Feed;
