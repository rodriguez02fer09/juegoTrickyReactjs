//import { userEvent, within } from '@storybook/testing-library';\
import '../../../styles/const/index.scss';
import Button  from '..';

export default {
  component: Button,
  title: 'Button', // El título de tu componente en Storybook
  argTypes: {
    label: { control: 'text' }, // Control para editar el texto del botón
   type: ['large-yellow','large-blue', 'small-yellow', 'small-gray' ] // Control para editar el color del botón
  },
};

const Template = (args) => <Button {...args} />;

export const LargeYellow = Template.bind({});
LargeYellow.args = {
  label: 'Botón 1',
  type: 'large-yellow',
  //dataTestId: 'large-yellow-button'
};

export const LargeBlue= Template.bind({});
LargeBlue.args = {
  label: 'Botón 2',
  type: 'large-blue'
};

export const SmallYellow = Template.bind({});
SmallYellow.args = {
  label: 'Botón Pequeño 1',
  type: 'small-yellow'
};

export const SmallGray = Template.bind({});
SmallGray.args = {
  label: 'Botón Pequeño 2',
  type: 'small-gray',
 // dataTestId: 'small-gray-button'
};  


/// Función para realizar la prueba de interacción
// SmallGray.play = async ({ args, canvasElement }) => {
//   const { getByTestId } = within(canvasElement);
// Encuentra el botón dentro del área de pruebas utilizando su data-testid
//   const button = getByTestId(args.dataTestId);

// Realiza una acción de clic en el botón utilizando userEvent
//   await userEvent.click(button);

// Añade cualquier otra lógica de prueba que desees aquí.