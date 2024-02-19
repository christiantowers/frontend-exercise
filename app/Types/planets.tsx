export interface IProps {
    currentPage: number;
    debouncedSearchTerm: any;
}

export type Planet = {
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    films: string;
    gravity: string;
    name: string;
    orbital_period: string;
    residents: string;
    terrain: string;
    population: string;
    url: string;
};

export type PlanetResult = {
    results: Planet[];
    total: number;
}

export type IModalProps = {
  visible: boolean;
  url: string;
  closeModal: () => void;
}