"use client"
import React, { useState } from "react";

import { IModalProps } from "../../Types/planets";
import { usePlanet } from "../../Queries/planetQueries";
import Loading from "../Loading";
import { formatDate } from "../../Helpers/utils"

const Modal = ({visible, url, closeModal,}: IModalProps) => {
  const [showModal, setShowModal] = useState(visible);
  const { status, data, error, isFetching } = usePlanet(url);
  return (
    <>
      {showModal ? (
        <>
          
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-4x2">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">                
                
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">

                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      {data?.name}                     
                    </h2>


                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => {setShowModal(false); closeModal()}}
                    >
                      <span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 py-0 rounded-full">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto mb-20 grid grid-cols-2 text-left gap-4">
                  
                      <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Clima</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data?.climate}</p>
                      </div>
                      <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Criado em</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{formatDate(data?.created || '')}</p>
                      </div>
                      <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Diâmetro</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data?.climate}</p>
                      </div>
                      <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Editado</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{formatDate(data?.edited || '')}</p>
                      </div>
                      <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Filmes</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data?.films.length}</p>
                      </div>
                      <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Gravidade</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data?.gravity}</p>
                      </div>
                      <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Periodo orbital</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data?.orbital_period}</p>
                      </div>
                      <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Residentes</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data?.residents.length}</p>
                      </div>
                      <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Terreno</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data?.terrain}</p>
                      </div>
                      <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">População</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data?.population}</p>
                      </div>                    
                  </div>
                  
                {(showModal && (status === "pending")) && <Loading loading={true} />}

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => {setShowModal(false); closeModal();}}
                  >
                    Close
                  </button>                  
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;