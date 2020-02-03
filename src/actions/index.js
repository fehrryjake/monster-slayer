const damageCalculator = () => {
  return Math.round(Math.random() * 10);
}

const specialDamageCalculator = () => {
  return Math.round(Math.random() * 20);
}

export const Attack = (attacker, defender) => ({
  type: 'ATTACK',
  payload: {
    attacker,
    defender,
    damage: damageCalculator()
  }
})

export const SpecialAttack = (attacker, defender) => ({
  type: 'SPECIAL_ATTACK',
  payload: {
    attacker,
    defender,
    damage: specialDamageCalculator()
  }
})

export const Heal = (actor) => ({
  type: 'HEAL',
  payload: {
    actor,
    heal: damageCalculator()
  }
})

export const GiveUp = (actor) => ({
  type: 'GIVE_UP',
  payload: actor
})

export const StartOver = () => ({
  type: 'START_OVER'  
})
