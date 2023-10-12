import React from 'react'
import ComponentLetters from '../index' // Asegúrate de que la ruta sea correcta

export default {
  title: 'ComponentLetters',
  component: ComponentLetters,
}

const Template = args => <ComponentLetters {...args} />

export const letterOmediun = Template.bind({})
letterOmediun.args = {
  player: {value: 'o', size: 'mediun'},
}

export const letterOlarge = Template.bind({})
letterOlarge.args = {
  player: {value: 'o', size: 'large'},
}

export const letterXmediun = Template.bind({})
letterXmediun.args = {
  player: {value: 'x', size: 'mediun'},
}

export const letterXlarge = Template.bind({})
letterXlarge.args = {
  player: {value: 'x', size: 'large'},
}
