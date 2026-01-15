import { useEffect, useState } from "react";

const Suggestions = () => {
  const [profile, setProfile] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((data) => data.json())
      .then((data) => {
        const users = data;
        //First user
        setProfile(users[0]);
        //remaining users
        setSuggestions(users.slice(1));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="m-6 md:mr-12">
        <div className="flex items-center w-full  gap-2">
          <img className="w-12 h-12 rounded-full" src={profile.profilePic} alt="profile pic" />
          <div className="flex flex-row justify-between w-full">
            <p className="text-sm">{profile.username}</p>
            <button className="text-blue-500 text-[12px] text-center">
              Switch
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full text-gray-600 mt-4 text-xs">
          <p className="">Suggested for you</p>
          <button className="text-black">See All</button>
        </div>

        <div>
          {suggestions.map((user) => (
            <div key={user.id} className="flex items-center gap-3 py-3">
              <img
                src={user.profilePic}
                alt={`${user.username} avatar`}
                className="dp rounded-full"
              />

              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{user.username}</span>
                  <span className="text-xs text-gray-400">
                    Suggested for you
                  </span>
                </div>

                <button className="text-xs text-blue-500 font-medium">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Suggestions;
