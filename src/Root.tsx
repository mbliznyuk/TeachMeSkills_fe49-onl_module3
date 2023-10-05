import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { mockedPostCardModels } from './mocked-data';
import { ActivatePage } from './pages/activate';
import { ActivationSuccess } from './pages/activation-success';
import { AddPostPage } from './pages/add-post';
import { AllPostsPage } from './pages/all-posts';
import { RegistrationSuccess } from './pages/registartion-success';
import { SearchResultsPage } from './pages/search-results';
import { SelectedPostPage } from './pages/selected-post';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';

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
            path="/activate/success"
            element={<ActivationSuccess />}
          ></Route>
          <Route
            path="/activate/:uid/:token"
            element={<ActivatePage />}
          ></Route>
          <Route
            path="/sign-up/success/:email"
            element={<RegistrationSuccess />}
          ></Route>
          <Route
            path="/search-result"
            element={<SearchResultsPage postCards={mockedPostCardModels} />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Root;
