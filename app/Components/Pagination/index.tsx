import React from 'react';
import { usePagination, DOTS } from './usePagination';
import './pagination.css';

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // if (currentPage === 0 || paginationRange.length < 2) {
  //   return null;
  // }
  let lastPage = paginationRange[paginationRange.length - 1];
    
  const onNext = () => {
    (currentPage < parseInt(`${lastPage}`)) && (onPageChange(currentPage + 1))    
  };

  const onPrevious = () => {    
    (currentPage > 1) && (onPageChange(currentPage - 1))
  };


  return (
    <div className='pagContainer'>
      <ul
        className={'pagination-container'}
      >
        {/* Seta de navegação da esquerda */}
        <li
          data-testid={'item-back'}
          className={'pagination-item'}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber, index) => {
          // Se o pageItem for um PONTO (DOT), renderize o caractere unicode DOTS
          if (pageNumber === DOTS) {
            return <li key={index} className="pagination-item dots">&#8230;</li>;
          }

          // Renderize a amostra de página
          return (
            <li
              data-testid={'item-number'}
              key={index}
              className={ pageNumber === currentPage ? 'pagination-item selected' : 'pagination-item' }
              onClick={() => onPageChange(pageNumber as number)}
            >
              {pageNumber}
            </li>
          );
        })}
        {/* Seta de navegação da direita */}
        <li
          data-testid={'item-next'}
          className={'pagination-item'}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;