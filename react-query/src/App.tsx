import { useQuery } from "react-query";
import axios from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get("http://localhost:3000/posts");
  return response.data;
};

function App() {
  const { data, isLoading, error } = useQuery<Post[]>("posts", fetchPosts);

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <div>
      {data?.map((post: Post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default App;
