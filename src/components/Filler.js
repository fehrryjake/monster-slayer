import React from 'react';
//import { connect } from 'react-redux';

import './HealthBar.css';

const Filler = (props) => {
  return (
    <div className="filler" style={{ width: props.percentage + '%' }}>
      <div className="health">{props.health}</div>
    </div>
  )
}

export default Filler;