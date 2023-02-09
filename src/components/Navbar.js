import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/logos/Logo.png';

const Navbar = () => {
    return (
        <>
            <Stack direction="row" sx={{gap : {sm : "122px" , xs : "40px"} , mt: {sm : "32px" , xs:"20px"}} }>
                <Link to="/">
                    <img style={{ width: "48px", height: "48px", margin: "0px 20px" }} src={Logo} alt="Logo" />
                </Link>

                <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
                    <Link to="/" style={{ textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625" }}>
                        Home
                    </Link>
                    <a style={{ textDecoration: "none", color: "#3A1212" }} href="#exercises">Exercise</a>
                </Stack>
            </Stack>
        </>
    )
}

export default Navbar