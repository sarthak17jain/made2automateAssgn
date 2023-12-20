import React from 'react'
import Stats from './Stats';
import DashBoardHeader from './DashBoardHeader/DashBoardHeader';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

function Dashboard() {
    const dashBoardStyle = {
        margin: "10px",
        padding: "10px",
        backgroundColor: "rgb(224, 227, 231)",
    }
    const AddProductButton = styled('div')({
        position: "fixed",
        right: "5vw",
        bottom: "10vh",
        height: "40px",
        width: "120px",
        color: "#FFFFFF",
        backgroundColor: "#483AE6",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        '&:hover': { opacity: "0.8", cursor:"pointer" },
    });

    return (
        <div>
            <DashBoardHeader/>
            <main style={dashBoardStyle}>
                <Stats/>
            </main>
            <Link to="addProduct">
                <AddProductButton>Add Product</AddProductButton>
            </Link>
        </div>
    )
}

export default Dashboard;