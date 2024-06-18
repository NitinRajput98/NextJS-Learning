import { useState } from "react";
import PostLists from "./components/PostLists";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const showModalHandler = () => setModalIsVisible(true);

  const hideModalHandler = () => setModalIsVisible(false);
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostLists
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
