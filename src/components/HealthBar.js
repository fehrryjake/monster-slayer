import React from 'react';

import './HealthBar.css';
import Filler from './Filler';

const HealthBar = (props) => {
  return (
    <div className="health-bar">
      <Filler percentage={(props.health / props.maxHealth) * 100} health={props.health} />
    </div>
  )
}

export default HealthBar;