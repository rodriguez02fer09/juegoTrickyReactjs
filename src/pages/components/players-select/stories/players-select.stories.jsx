import React from 'react'
import PlayersSelect from '../index' // Asegúrate de que la ruta sea correcta

export default {
  title: 'PlayersSelect',
  component: PlayersSelect,
}

const Template = args => <PlayersSelect {...args} />

export const PlayerO = Template.bind({})
PlayerO.args = {
  player: {value: 'o', selected: false},
}

export const PlayerX = Template.bind({})
PlayerX.args = {
  player: {value: 'x', selected: false},
}

export const PlayerOSelect = Template.bind({})
PlayerOSelect.args = {
  player: {value: 'o', selected: true},
}

export const PlayerXSelect = Template.bind({})
PlayerXSelect.args = {
  player: {value: 'x', selected: true},
}
