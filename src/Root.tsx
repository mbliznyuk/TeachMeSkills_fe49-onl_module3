import { ThemeSwitcher } from '#features/theme-switcher/theme-switcher';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { mockedPostCardModels } from './mocked-data';
import { AllPostsPage } from './pages/all-posts';
import { SearchResultsPage } from './pages/search-results';
import { SelectedPostPage } from './pages/selected-post';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Success } from './pages/success';
import { AddPostPage } from './pages/add-post';

function Root() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Link to="/posts">Go to posts</Link>}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/add-post' element={<AddPostPage/>}/>
        <Route path='/posts' element={<AllPostsPage/>}></Route>
        <Route path='/posts/:postId' element={<SelectedPostPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Root;
