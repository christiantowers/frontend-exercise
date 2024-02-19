import React from 'react';

interface IProps {
  name: string;
  url: string;
  population: string;
  callback: (url: string) => void;
}

const CardPlanet: React.FC<IProps> = ({ name, url, population, callback }) => {
    return (
        <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            onClick={() => callback(url)}
        >
            <h2 className={`mb-3 text-2xl font-semibold`}>
            {name}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            População: {population}
            </p>
        </div>
    )
}

export default CardPlanet;