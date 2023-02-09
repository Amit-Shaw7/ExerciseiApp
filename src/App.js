import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/exercise/:id' element={<ExerciseDetails />} />
                </Routes>
            </Box>
            <Footer />
        </BrowserRouter>
    )
}

export default App