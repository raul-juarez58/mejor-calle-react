import { useState } from "react";
import "./Like.css";

function Like() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      className="like-btn"
      onClick={() => setLikes(likes + 1)}
    >
      ❤️ <span>{likes}</span>
    </button>
  );
}

export default Like;