import { Routes, Route } from 'react-router-dom'
import Home from "../Components/Pages/Home/Home"
import About from "../Components/Pages/About/About"
const MyAppRoutes = () => {
    return (
        <div>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    )
}

export default MyAppRoutes
