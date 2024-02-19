import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchInput from './index';

it('should prevent input of invalid characters', () => {
  // Mock callback function
  const mockCallback = jest.fn();

  // Render the component
  const { getByPlaceholderText } = render(
    <SearchInput planetName="" callback={mockCallback} />
  );

  // Simulate input with invalid character
  const inputElement = getByPlaceholderText('Buscar Planetas');
  fireEvent.keyDown(inputElement, { key: '1' });

  // Check if the callback function was not called
  expect(mockCallback).not.toHaveBeenCalled();
});
