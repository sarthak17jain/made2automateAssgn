import React from 'react'

function Stat({name, value}) {
    const statStyle = {
        height: "150px",
        width: "150px",
        padding: "10px",
        backgroundColor: "rgb(242, 244, 248)",
        borderRadius: "10%"
    }
    const valueStyle = {
        position: "relative",
        fontSize: "35px",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
    const titleStyle = {
        position: "relative",
        fontSize: "20px",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
  return (
    <div style={statStyle}>
        <div style={valueStyle}>{value}</div>
        <div style={titleStyle}>{name}</div>
    </div>
  )
}

export default Stat;