"use client";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import _ from "lodash";

import Modal from "../Components/Modal";
import Pagination from "../Components/Pagination";

import useDebounce from "../Hooks/useDebounce";
import { usePlanets } from "../Queries/planetQueries";
import CardPlanet from "../Components/CardPlanet";
import SearchInput from "../Components/SearchInput";

function Planets() {
  const [currentPage, setCurrentPage] = useState(1);
  const [planetName, setPlanetName] = useState("");
  const [url, setUrl] = useState("");

  const debouncedSearchTerm = useDebounce({ value: planetName, delay: 300 });
  const { status, data, error, isFetching } = usePlanets({
    currentPage,
    debouncedSearchTerm,
  });  

  return (
    <>
      {status === "pending" ? (
        "Loading..."
      ) : error instanceof Error ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <SearchInput 
            planetName={planetName}
            callback={(e) => setPlanetName(e.target.value)}
          />

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
              {data?.results?.map((planet, index) => (
                <CardPlanet
                  key={index}
                  name={planet.name}
                  url={planet.url}
                  population={planet.population}
                  callback={() => setUrl(planet.url)}
                />
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>

            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={data?.total!}
              pageSize={10}
              onPageChange={(page) => setCurrentPage(page)}
            />
          
        </>
      )}

      {url.length > 0 && (
        <Modal visible={true} url={url} closeModal={() => setUrl("")} />
      )}
    </>
  );
}

function ListPlanets() {
  return <Planets />;
}

export default ListPlanets;
