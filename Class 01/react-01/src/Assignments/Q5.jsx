import { useState } from 'react'

function LikeCount({likes}) {

  return (
    <h2>Likes: {likes}</h2>
  )
}

function LikeButton({handleLike}) {

  return (
    <button onClick={handleLike}>
      Like
    </button>
  )
}

function Q5() {

  let [likes, setLikes] = useState(0)

  function handleLike(){
    setLikes(likes + 1)
  }

  return (
    <div>

      <LikeCount likes={likes} />

      <LikeButton handleLike={handleLike} />

    </div>
  )
}

export default Q5