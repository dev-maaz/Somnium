import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import CreatePage from './pages/Create';
import PostPage from './pages/Post';
import ProfilePage from './pages/Profile';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/create' element={<CreatePage/>} />
        <Route path='/post' element={<PostPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Routes>

  </div>
  );

}

export default App;