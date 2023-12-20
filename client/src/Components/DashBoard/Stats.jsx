import React from 'react';
import Stat from './Stat';

function Stats() {
    const statsStyle = {
        display: "flex",
        justifyContent: "space-around"
    }
  return (
    <div style={statsStyle}>
        <Stat name="Total Orders" value={112}/>
        <Stat name="New Stocks" value={152}/>
        <Stat name="Dead Stocks" value={100}/>
        <Stat name="Total Leads" value={25}/>
        <Stat name="Total Revenue" value={111200}/>
    </div>
  )
}

export default Stats;