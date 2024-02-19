import React, { ChangeEvent } from 'react';

interface IProps {
  planetName: string;
  callback: (term: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<IProps> = ({ planetName, callback }) => {
    return (
        // <div className="z-10 w-full items-center justify-between text-sm lg:flex">
            <input
              className="block w-1/3 p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar Planetas"
              autoComplete="off"
              type="search"
              value={planetName}
              autoFocus={true}
              onKeyDown={(event) => {
                const allowedKeys = [
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "Tab",
                ];
                const regex = /^[A-Za-z\s]*$/;

                if (
                  !allowedKeys.includes(event.key) &&
                  !regex.test(event.key)
                ) {
                  event.preventDefault();
                }
              }}
              onChange={callback}
            />
        // </div>
    )
}

export default SearchInput;