import { Route } from "react-router";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <>
      <CounterContainer />
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
