// src/components/Feed/PostCard.jsx
import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded shadow-sm">
      {/* Header */}
      <div className="flex items-center px-4 py-2">
        <img src={post.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
        <p className="font-semibold">{post.username}</p>
      </div>

      {/* Image */}
      <img src={post.image} alt="post" className="w-full object-cover" />

      {/* Actions */}
      <div className="px-4 py-2 space-y-2">
        <div className="flex space-x-4">
          <button>❤️</button>
          <button>💬</button>
          <button>📤</button>
        </div>

        {/* Caption */}
        <p>
          <span className="font-semibold">{post.username}</span> {post.caption}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
