import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import AddMember from './pages/AddMember';
import ViewMember from './pages/ViewMember';
import EditMember from './pages/EditMember';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="add-member" element={<AddMember />} />
          <Route path="view-members" element={<ViewMember />} />
          <Route path="update-member/:id" element={<EditMember />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
