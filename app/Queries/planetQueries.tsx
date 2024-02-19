import { useQuery } from '@tanstack/react-query';
import { getPlanetById, getPlanetsList } from '../Service/planetService';
import { Planet, PlanetResult, IProps } from '../Types/planets';


const usePlanets = ({currentPage, debouncedSearchTerm}: IProps) => {
    return useQuery({
        queryKey: ["planets", {currentPage, debouncedSearchTerm}], 
        queryFn: async (): Promise<PlanetResult> => getPlanetsList(currentPage, debouncedSearchTerm)
    });
};

const usePlanet = (url: string) => {
    return useQuery({
        queryKey: ["planetId", {url}], 
        queryFn: async (): Promise<Planet> => getPlanetById(url) 
    });
};

export { usePlanets, usePlanet };
