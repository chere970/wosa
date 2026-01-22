import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { SearchPage } from './pages/Search';

import { ProfessionalProfile } from './pages/ProfessionalProfile';
import { Chat } from './pages/Chat';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile/:id" element={<ProfessionalProfile />} />
          <Route path="/messages" element={<Chat />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
