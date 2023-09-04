import './App.css';
import { postCardModels } from './mocked-data';
import { SelectedPostPage} from './pages/selected-post';
import { SignIn } from './pages/sign-in';
import { Success } from './pages/success';

function App() {
  return (
    <div className="App">
      {/* <SignIn />
      <Success/> */}
      <SelectedPostPage selectedPost={postCardModels[2]}/>
    </div>
  );
}

export default App;
