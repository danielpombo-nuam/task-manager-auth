import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import TaskPage from './pages/TaskPage';

const App = () => {
  const [token, setToken] = useState(1);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={'/tasks'} />} />
        {/* <Route path="/login" element={<LoginPage setToken={setToken} />} /> */}
        <Route path="/tasks" element={<TaskPage token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;