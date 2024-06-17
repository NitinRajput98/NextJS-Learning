import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostLists.module.css";

function PostLists() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Nitin Rajput" body="Text 1" />
        <Post author="Kapil" body="Text 2" />
      </ul>
    </>
  );
}

export default PostLists;
