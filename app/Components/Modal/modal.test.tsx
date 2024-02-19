import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

import Modal from './index';

describe('Modal', () => {
  // const mockData = {
  //   name: 'Tatooine',
  //   climate: 'arid',
  //   created: '2022-02-18T12:00:00Z',
  //   edited: '2022-02-19T12:00:00Z',
  //   films: [],
  //   gravity: '1.5 (surface), 1 standard (Cloud City)',
  //   orbital_period: '1105',
  //   residents: [],
  //   terrain: 'desert',
  //   population: '200000',
  // };

  const closeModalMock = jest.fn();

  // it('renders nothing when visible is false', () => {
  //   const { queryByTestId } =  render(<Modal visible={false} url="https://swapi.dev/api/planets/1/" closeModal={closeModalMock} />);
  //   expect(queryByTestId(/Close/)).toBeNull();
  // });

  it('renders modal with correct content when visible is true', async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {},
      },
    });
    
    const persister = createSyncStoragePersister({
        storage: typeof window !== 'undefined' ? window.localStorage : null,
    }); 

    await act(async () => { 
      render(
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister }}
        >
          <Modal visible={true} url="https://swapi.dev/api/planets/1/" closeModal={closeModalMock} />
        </PersistQueryClientProvider>  
      );
    });

    expect(screen.getByText('Clima')).toBeInTheDocument();
    expect(screen.getByText('Filmes')).toBeInTheDocument();            
    expect(screen.getByText('Periodo orbital')).toBeInTheDocument();
    expect(screen.getByText('Residentes')).toBeInTheDocument(); 
    expect(screen.getByText('Terreno')).toBeInTheDocument(); 
    expect(screen.getByText('População')).toBeInTheDocument(); 
    expect(screen.getByText('Loading...')).toBeInTheDocument(); 
  });
});