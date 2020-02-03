import React from 'react';
import { Attack, SpecialAttack, Heal, GiveUp, StartOver } from '../actions';
import { connect } from 'react-redux';

const CombatMenu = (props) => {
  if (!props.isGameOver) {
    return (
      <div className="combat-menu">
        <button onClick={props.onAttack} className="attack">ATTACK</button>
        <button onClick={props.onSpecialAttack} className="special-attack">SPECIAL ATTACK</button>
        <button onClick={props.onHeal} className="heal">HEAL</button>
        <button onClick={props.onGiveUp} className="give-up">GIVE UP</button>
      </div>
    );
  } else {
    return <button onClick={props.onStartOver} className="start-over">START NEW GAME</button>     
  }  
}

const mapStateToProps = (state) => {
  return { 
    isGameOver: (state.actors.player.health <= 0 || state.actors.monster.health <= 0),
    player: state.actors.player,
    monster: state.actors.monster
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    attack: (player, monster) => {
      dispatch(Attack(player, monster))
      dispatch(Attack(monster, player))
    },
    specialAttack: (player, monster) => {
      dispatch(SpecialAttack(player, monster))
      dispatch(Attack(monster, player))
    },
    heal: (player, monster) => {
      dispatch(Heal(player))
      dispatch(Attack(monster, player))
    },
    giveUp: (player) => {
      dispatch(GiveUp(player))
    },
    startOver: () => {
      dispatch(StartOver())
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    isGameOver: stateProps.isGameOver,
    onAttack: () => dispatchProps.attack(stateProps.player, stateProps.monster),
    onSpecialAttack: () => dispatchProps.specialAttack(stateProps.player, stateProps.monster),
    onHeal: () => dispatchProps.heal(stateProps.player, stateProps.monster),
    onGiveUp: () => dispatchProps.giveUp(stateProps.player),
    onStartOver: () => dispatchProps.startOver()
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CombatMenu); 