import { useState } from "react";
import "./Like.css";

function Like() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  return (
    <button
      className={`like-btn ${liked ? "active" : ""}`}
      onClick={handleLike}
    >
      {liked ? "❤️" : "🤍"} {likes}
    </button>
  );
}

export default Like;