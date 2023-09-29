import ContainPickPlayers from '../index'

export default {
  title: 'ContainPickPlayers',
  component: ContainPickPlayers,
}
const Template = args => <ContainPickPlayers {...args} />

export const PickPlayers = Template.bind({})
PickPlayers.args = {
  players: [
    {value: 'o', selected: false},
    {value: 'x', selected: true},
  ],
}
