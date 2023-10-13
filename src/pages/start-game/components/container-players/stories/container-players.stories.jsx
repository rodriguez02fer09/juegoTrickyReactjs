import ContainerPlayers from '../index'

export default {
  title: 'ContainerPlayers',
  component: ContainerPlayers,
}

const Template = args => <ContainerPlayers {...args} />

export const ContainerPlayerX = Template.bind({})
ContainerPlayerX.args = {
  players: [
    {value: 'o', selected: false},
    {value: 'x', selected: true},
  ],
}

export const ContainerPlayerO = Template.bind({})
ContainerPlayerO.args = {
  players: [
    {value: 'o', selected: true},
    {value: 'x', selected: false},
  ],
}
