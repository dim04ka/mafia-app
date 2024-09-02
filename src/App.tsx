import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import Login from './pages/login'
import styled from 'styled-components'
import Games from './pages/Games'

const AppWrapper = styled.div`
    height: 100vh;
`

function App() {
    return (
        <AppWrapper>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/games" element={<Games />} />

                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                </Routes>
            </Router>
        </AppWrapper>
    )
}

export default App
