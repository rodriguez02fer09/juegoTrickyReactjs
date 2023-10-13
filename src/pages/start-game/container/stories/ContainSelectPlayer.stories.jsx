import '../../../../common/styles/const/index.scss'
import ContainSelectPlayer from '..'

export default {
  component: ContainSelectPlayer,
  title: 'ContainSelectPlayer', /
}

const Template = args => <ContainSelectPlayer {...args} />

export const Default = Template.bind({})
Default.args = {
  players: [
    {value: 'o', selected: false},
    {value: 'x', selected: true},
  ],
}
