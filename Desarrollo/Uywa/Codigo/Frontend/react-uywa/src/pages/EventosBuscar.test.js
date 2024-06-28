import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cuadro from './EventosBuscar';

test('renders Cuadro component with search fields and button', () => {
  const { getByText, getByLabelText } = render(<Cuadro />);
  
  const searchText = getByText('Buscar eventos');
  expect(searchText).toBeInTheDocument();

  const dateField = getByLabelText('Fecha');
  const categoryField = getByLabelText('Categoría');
  const placeField = getByLabelText('Lugar');
  expect(dateField).toBeInTheDocument();
  expect(categoryField).toBeInTheDocument();
  expect(placeField).toBeInTheDocument();

  const searchButton = getByText('Buscar');
  expect(searchButton).toBeInTheDocument();
});
