import "./App.css";
// import { useGetAllPostQuery } from "./services/post.js";
//?delete by id

// import { useGetDeleteByIdMutation } from "./services/post.js";
//!for all data

// import { useGetPostByIdQuery } from "./services/post.js";
// import { useGetPostByLimitQuery } from "./services/post.js";
// import { useCreatePostMutation } from "./services/post.js";
import { useUpdatePostMutation } from "./services/post.js";

//! fet single data by id

function App() {
  // const responseInfo = useGetAllPostQuery();
  // const responseInfo = useGetPostByIdQuery(80);
  // const responseInfo = useGetPostByLimitQuery(3);
  // const [deletePost, responseInfo] = useGetDeleteByIdMutation();
  // const [createPost, responseInfo] = useCreatePostMutation();
  const [createPost, responseInfo] = useUpdatePostMutation();
  console.log(responseInfo.isSuccess);
  console.log(responseInfo);
  if (responseInfo.isLoading) {
    return <div>Loading.........</div>;
  }
  // const newPost = {
  //   title: "New Post by Abhi",
  //   body: "He is very disciplined,hardworking and honest guy",
  //   userId: 1,
  // };
  const updatePost = {
    id: 1,
    title: "New updatePost by Abhishek",
    body: "He is very disciplined,hardworking and honest guy",
    userId: 1,
  };
  return (
    <div className="App">
      <button onClick={() => createPost(updatePost)}> Update Post </button>
    </div>
  );
}

export default App;
