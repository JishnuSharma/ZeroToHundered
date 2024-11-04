import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Landing from './components/Landing'
import { Suspense } from 'react';

const Dashboard = React.lazy(() => import("./components/Dashboard"))

function App() {

    const navigate = useNavigate();

    return (
        <>
            <div>
                Here comes the header component
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Suspense fallback={"Loading....."}><Dashboard /></Suspense>} />
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default App