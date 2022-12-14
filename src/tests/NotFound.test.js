import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../components';
import renderWithRouter from '../renderWithRouter';

beforeEach(() => renderWithRouter(<NotFound />));

test('Verifica se página contém um h2 com o texto Page requested not found 😭', () => {
  const h2 = screen.getByRole(
    'heading',
    { level: 2, name: /page requested not found/i },
  );
  expect(h2).toBeInTheDocument();
});

test('Verifica se página mostra a imagem do NotFound', () => {
  const img = screen.getByAltText(
    /pikachu crying because the page requested was not found/i,
  );
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
