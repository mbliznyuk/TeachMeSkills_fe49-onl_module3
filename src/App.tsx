import { ThemeSwitcher } from '#features/theme-switcher/theme-switcher';
import './App.css';
import { mockedPostCardModels } from './mocked-data';
import { AllPostsPage } from './pages/all-posts';
import { SearchResultsPage } from './pages/search-results';
import { SelectedPostPage } from './pages/selected-post';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Success } from './pages/success';

function App() {
  return (
    <div className="App">
      {/* <ThemeSwitcher></ThemeSwitcher> */}
      <SignUp />
      <SignIn />
      <Success/>
      <SelectedPostPage selectedPost={mockedPostCardModels[2]}/>
      <AllPostsPage></AllPostsPage>
      <SearchResultsPage postCards={mockedPostCardModels}></SearchResultsPage>
    </div>
  );
}

export default App;
