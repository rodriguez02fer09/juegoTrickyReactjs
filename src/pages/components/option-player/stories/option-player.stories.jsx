import React from 'react'
import OptionPlayer from '../index' // Asegúrate de que la ruta sea correcta

export default {
  title: 'OptionPlayer',
  component: OptionPlayer,
}

const Template = args => <OptionPlayer {...args} />

export const OptionPlayerO = Template.bind({})
OptionPlayerO.args = {
  player: {value: 'o', selected: false},
}
export const OptionPlayerX = Template.bind({})
OptionPlayerX.args = {
  player: {value: 'x', selected: false},
}
export const OptionPlayerOisSelected = Template.bind({})
OptionPlayerOisSelected.args = {
  player: {value: 'o', selected: true},
}
export const OptionPlayerXisSelected = Template.bind({})
OptionPlayerXisSelected.args = {
  player: {value: 'x', selected: true},
}
