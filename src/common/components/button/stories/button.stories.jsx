import Button  from '..';

export default {
  component: Button,
  title: 'Button', // El título de tu componente en Storybook
  argTypes: {
    label: { control: 'text' }, // Control para editar el texto del botón
    size: { control: 'text' },  // Control para editar el tamaño del botón
    color: { control: 'color' }, // Control para editar el color del botón
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Botón 1',
  size: 'medium', // Ajusta el tamaño aquí (small, medium, large)
  color: 'blue', // Ajusta el color aquí (blue, red, green)
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Botón 2',
  size: 'large', // Ajusta el tamaño aquí (small, medium, large)
  color: 'red', // Ajusta el color aquí (blue, red, green)
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Botón 3',
  size: 'small', // Ajusta el tamaño aquí (small, medium, large)
  color: 'green', // Ajusta el color aquí (blue, red, green)
};