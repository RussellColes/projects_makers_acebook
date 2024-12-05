import { likePost, deletePost } from "../services/posts";
import { useState, useEffect } from "react";
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";
import { ImBin } from "react-icons/im";
import { EditPost } from "./EditPost";

import "../pages/CSS.css"
// import "../pages/Post.css"
import { Link } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Post(props) {
  // const date = props.post.date ? new Date(props.post.date) : null;
  console.log(props.handleReloadPosts)
  const [likeCount, setLikeCount] = useState(props.post.likeCount);
  const [isLiked, setIsLiked] = useState((false));


  const [isEditing, setIsEditing] = useState(false);



  useEffect(() => {
    setIsLiked(props.post.likes.includes(props.post.currentUserId));
  },
    [] // Empty dependency array - run on page load
  );

  const handleStartEditing = () => {
    setIsEditing(!isEditing);
  };

  
  const handleIsLiked = () => {
    setIsLiked(!isLiked);
  }

  //Function to handle liking/unliking posts
  const handleLike = async () => {
    console.log("LIKE BUTTON PRESSED!!!!")
    const token = localStorage.getItem('token');
    const response = await likePost(token, props.post._id)
    if ((response === 0 || response) && typeof(response) === 'number'){
      console.log("RESPONSE!!!!")
      setLikeCount(response)
      handleIsLiked();
    }
    else{
      console.error('Error: Did not get like count')
    }
    
    
  }


    // Function to handle deleting the post
    const handleDelete = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        await deletePost(props.post._id, token);
        await props.handleReloadPosts();
        // alert(`Post with ID ${props.post._id} has been deleted.`);
        
        // Notify parent component if a callback is provided
        if (props.onDelete) {
          props.onDelete(props.post._id);

        }
      } catch (error) {
        alert(error.message);
      }
    };
    // Check if the current user is the same as the user_id associated with the post
    const isOwnPost = props.post.currentUserId === props.post.user_id



  return (
    <div className="post-card">
    <div key={props.post._id}>
      {/* <p>
        <small>Posted on: {date ? date.toLocaleString("en-GB") : "Unknown Date"}</small>
      </p> */}

<div className="grid-container-post">
  <div className="grid-item">
{/* image */}
      <img 
        className="post-image" 
        src={`${BACKEND_URL}/${props.post.filePath}`} 
        width="50">
      </img>
      {/* user name link */}
      <h2><Link 
        className="other-profile-link" 
        to={`/profile/${props.post.username}`}>{props.post.firstName} {props.post.lastName}
      </Link></h2>
</div>
<div className="grid-item">

{/* photo upload */}
{props.post.photoFilePath ? <img className="image-as-post" src={`${BACKEND_URL}/${props.post.photoFilePath}`} width="300"></img> : <></>}

{/* message */}
      <p>{props.post.message}</p>

      <br></br>
{/* like button */}
      <a onClick={handleLike}>{isLiked ? <VscHeartFilled /> : <VscHeart />}</a>

{/* like count */}
    <p>{likeCount} Likes</p>
      {isOwnPost && (
      <a onClick={handleDelete}><ImBin className="bin-icon" /></a>
      )}

<br></br>

{/* edit post */}
    {isOwnPost && (
      <button onClick={handleStartEditing}>Edit Post</button>
    )}
    {isEditing && (
      <EditPost handleReloadPosts={props.handleReloadPosts} message={props.post.message} postId={props.post._id} handleStartEditing={handleStartEditing}/>
    )}
            


    {isOwnPost && (
      <a onClick={handleDelete}><ImBin className="bin-icon" /></a>
    )}
  </div>
  </div>

  </div>
  </div>
  );
}

export default Post;

