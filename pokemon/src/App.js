import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle'
import Detailpage from './pages/Detailpage'
import SideBar from './components/SideBar';
import Profile from './pages/Profile'
import Bookmark from './pages/Bookmark'
function App() {
  return (
    <>
      <GlobalStyle />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detailpage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </>
  );
}

export default App;
