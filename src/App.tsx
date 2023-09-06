import { AllPosts } from '#features/all-posts/all-posts-body';
import './App.css';
import { postCardModels } from './mocked-data';
import { AllPostsPage } from './pages/all-posts';
import { SelectedPostPage} from './pages/selected-post';
import { SignIn } from './pages/sign-in';
import { Success } from './pages/success';

function App() {
  return (
    <div className="App">
      <SignIn />
      <Success/>
      <SelectedPostPage selectedPost={postCardModels[2]}/>
      <AllPostsPage></AllPostsPage>
    </div>
  );
}

export default App;
