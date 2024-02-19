import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CardPlanet from './index';

describe('CardPlanet', () => {
  it('renders with correct name and population', () => {
    const name = 'Tatooine';
    const url = 'https://swapi.dev/api/planets/1/';
    const population = '200000';
    const callback = jest.fn();

    render(
      <CardPlanet name={name} url={url} population={population} callback={callback} />
    );

    expect(screen.getByText('Tatooine')).toBeVisible();
    expect(screen.getByText(`População: ${population}`)).toBeInTheDocument();
  });

  it('calls callback function when clicked', () => {
    const name = 'Tatooine';
    const url = 'https://swapi.dev/api/planets/1/';
    const population = '200000';
    const callback = jest.fn();

    render(
      <CardPlanet name={name} url={url} population={population} callback={callback} />
    );

    const cardPlanet = screen.getByText('Tatooine') as HTMLElement;
    fireEvent.click(cardPlanet);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(url);
  });
});