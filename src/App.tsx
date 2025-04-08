import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/App.css';
import ObjectPage from '@/components/ObjectPage';
import Main from '@/components/Main';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:campaignId" element={<ObjectPage />} />
            </Routes>
        </Router>
    );
}

export default App;
