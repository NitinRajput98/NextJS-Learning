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

export async function loader() {
  const res = await fetch("http://localhost:8080/posts");
  const resData = await res.json();
  return resData.posts;
}
