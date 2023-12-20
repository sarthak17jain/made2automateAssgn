import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link } from 'react-router-dom';

function Header({title}) {
    return (
        <header style={{backgroundColor: "#2E323F", padding: "1em 0", textAlign: "center"}}>
            <Link to='/'>
                <HomeRoundedIcon color="inherit" fontSize='medium' sx={{float: "left", marginLeft:"30px", color: "#FFFFFF", '&:hover': { opacity: "0.5", cursor:"pointer" }}}/>
            </Link>
            <span style={{color: "#FFFFFF"}}><strong>{title}</strong></span>
        </header>
    )
}

export default Header;