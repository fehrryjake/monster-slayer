const defaultState = {
  player: {
    health: 100,
    maxHealth: 100,
    id: 'player'
  },
  monster: {
    health: 100,
    maxHealth: 100,
    id: 'computer'
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ATTACK':
      if (action.payload.attacker.health > 0) {
        if (action.payload.attacker.id === 'player') {
          return {
            ...state,
            monster: {
              health: state.monster.health - action.payload.damage,
              maxHealth: state.monster.maxHealth,
              id: state.monster.id
            }
          }
        } else {
          return {
            ...state,
            player: {
              health: state.player.health - action.payload.damage,
              maxHealth: state.player.maxHealth,
              id: state.player.id
            }
          }
        }
      } else {
        return state;
      }

    case 'SPECIAL_ATTACK':
      if (action.payload.attacker.health > 0) {
        if (action.payload.attacker.id === 'player') {
          return {
            ...state,
            monster: {
              health: state.monster.health - action.payload.damage,
              maxHealth: state.monster.maxHealth,
              id: state.monster.id
            }
          }
        } else {
          return {
            ...state,
            player: {
              health: state.player.health - action.payload.damage,
              maxHealth: state.player.maxHealth,
              id: state.player.id
            }
          }
        }
      } else {
        return state;
      }

    case 'HEAL':
      if (action.payload.actor.health > 0) {
        return {
          ...state,
          player: {
            health: state.player.health + action.payload.heal,
            maxHealth: state.player.maxHealth,
            id: state.player.id
          }
        }
      } else {
        return state;
      }         

    case 'GIVE_UP':
      return {
        ...state,
        player: {
          health: 0,
          maxHealth: 100
        }
      }

    case 'START_OVER':
      return defaultState;      

    default:
      return state;
  }
}