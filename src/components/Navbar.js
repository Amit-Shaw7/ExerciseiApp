import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { FitnessCenter } from '@mui/icons-material';

const Navbar = () => {
    return (
        <>
            <Stack alignItems="center" direction="row" sx={{ gap: { sm: "122px", xs: "40px" }, pt: { sm: "32px", xs: "20px" } }}>
                <Stack sx={{ position: "relative", left: { md: "50px", sm: "10px", xs: "10px" } }}>
                    <Link to="/">
                        <FitnessCenter sx={{ fontSize: "3rem" }} htmlColor='white' />
                    </Link>
                </Stack>

                <Stack direction="row" gap="40px" fontSize="18px">
                    <Link to="/" style={{ textDecoration: "none", color: "#FF2625" }}>
                        Home
                    </Link>
                    <a style={{ textDecoration: "none", color: "white" }} href="#exercises">Exercise</a>
                </Stack>
            </Stack>
        </>
    )
}

export default Navbar