import React, { useState } from 'react';
import style from './Users.module.scss';

export const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNamber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNamber = portionNumber * portionSize;
  return (
    <div className={style.number}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          prev
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNamber && p <= rightPortionPageNamber
        )
        .map((p) => {
          return (
            <span
              className={currentPage === p && style.selectedPage}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          next
        </button>
      )}
    </div>
  );
};
