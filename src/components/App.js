import React from 'react';
import { connect } from 'react-redux';

import HealthBar from './HealthBar';
import CombatMenu from './CombatMenu';
import CombatLog from './CombatLog';

const App = (props) => {
  return (
    <div className="container">
      <div className="health-display">
        <div className="player">
          <h2 className="title">YOU</h2>
          <HealthBar maxHealth={props.playerMaxHealth} health={props.playerHealth} />
        </div>
        
        <div className="monster">
          <h2 className="title">MONSTER</h2>
          <HealthBar maxHealth={props.monsterMaxHealth} health={props.monsterHealth} />
        </div>
      </div>

      <div className="combat-bar">
        <CombatMenu />
      </div>

      <CombatLog />      
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    playerHealth: state.actors.player.health,
    monsterHealth: state.actors.monster.health,
    playerMaxHealth: state.actors.player.maxHealth,
    monsterMaxHealth: state.actors.monster.maxHealth
   }
}

export default connect(mapStateToProps)(App);
