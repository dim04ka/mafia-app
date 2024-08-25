import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import Login from './pages/login'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                </Routes>
            </Router>
        </>
    )
}

export default App
