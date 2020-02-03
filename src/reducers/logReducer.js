import React from 'react';

export default (state=[], action) => {
  switch (action.type) {
    case 'ATTACK':
      return [
        ...state,
        <p style={ action.payload.attacker.id === 'player' ? { color: 'blue' } : { color: 'red' }}>{action.payload.attacker.id.toUpperCase()} ATTACKED {action.payload.defender.id.toUpperCase()} FOR {action.payload.damage}</p>
      ]

    case 'SPECIAL_ATTACK':
      return [
        ...state,
        <p style={ action.payload.attacker.id === 'player' ? { color: 'blue' } : { color: 'red' }}>{action.payload.attacker.id.toUpperCase()} USED SPECIAL ATTACK AGAINST {action.payload.defender.id.toUpperCase()} FOR {action.payload.damage}</p>
      ]

    case 'HEAL':
      return [
        ...state,
        <p style={ action.payload.actor.id === 'player' ? { color: 'blue' } : { color: 'red' }}>{action.payload.actor.id.toUpperCase()} HEALED FOR {action.payload.heal}</p>
      ]

    case 'GIVE_UP':
      return state;

    default:
      return state;
  }
}