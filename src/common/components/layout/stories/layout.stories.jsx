import '../../../styles/const/index.scss'
import Layout from '..'

export default {
  component: Layout,
  title: 'Layout', // Título de tu componente de layout en Storybook
  argTypes: {
    backgroundColor: {control: 'color'}, // Control para editar el color de fondo del layout
    content: {control: 'text'}, // Control para editar el contenido del layout
  },
}

const Template = args => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'white',
  content: 'Contenido predeterminado del layout',
}
