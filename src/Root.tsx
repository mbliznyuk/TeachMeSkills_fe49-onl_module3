import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddPostPage } from './pages/add-post';
import { AllPostsPage } from './pages/all-posts';
import { SelectedPostPage } from './pages/selected-post';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { SearchResultsPage } from './pages/search-results';
import { mockedPostCardModels } from './mocked-data';

function Root() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Link to="/posts">Go to posts</Link>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/add-post" element={<AddPostPage />} />
          <Route path="/posts" element={<AllPostsPage />}></Route>
          <Route path="/posts/:postId" element={<SelectedPostPage />}></Route>
          <Route
            path="/search-resault"
            element={<SearchResultsPage postCards={mockedPostCardModels} />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Root;
