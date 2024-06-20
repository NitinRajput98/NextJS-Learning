import { Outlet } from "react-router-dom";
import PostLists from "../components/PostLists";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostLists />
      </main>
    </>
  );
}

export default Posts;
