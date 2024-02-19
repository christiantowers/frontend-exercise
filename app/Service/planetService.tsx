import axios from "axios"

const baseURL = 'https://swapi.dev/api';

export async function getPlanetsList(page: number, planetName?: string) { 
    //console.log(new URLSearchParams({page, (planetName || undefined)}))   
    const search = planetName ? `&search=${planetName}` : ''
    const { data } = await axios.get(
        `${baseURL}/planets/?page=${planetName ? '1' : page}${search}`
    );
    return {
        results: data.results,
        total: data.count,
    };
};

export async function getPlanetById(url: string) {
    const { data } = await axios.get(url);
    return data;
};

 