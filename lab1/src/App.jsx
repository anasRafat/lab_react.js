import { Post } from "./componant/Post";
export const App = () => {
  const arr =[
  {todo: "erorr", description:"warning learn more about each warning"},
  {todo: "hello", description:"Note that the development build is not optimized."},
  {todo: "night", description:"To create a production build"},
  {todo: "loby", description:"learn more about each warning learn more about each warning"}
]
  return <dl>{arr.map((ar)=><Post todo={ar.todo}description={ar.description}></Post>)}</dl>;
};



