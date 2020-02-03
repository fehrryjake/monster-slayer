import React from 'react';
import { connect } from 'react-redux';

const CombatLog = (props) => {
  return (
    <div className="combat-log">
      {props.log}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    log: state.log
  }
}

export default connect(mapStateToProps)(CombatLog);