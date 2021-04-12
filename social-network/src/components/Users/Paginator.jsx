import React, { useState } from 'react';
import { Button } from '../Button/Button';
import style from './Users.module.scss';

export const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 5,
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
        <Button
          styleType="default"
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          prev
        </Button>
      )}
      <div className={style.pages}>
        {pages
          .filter(
            (p) => p >= leftPortionPageNamber && p <= rightPortionPageNamber
          )
          .map((p) => {
            return (
              <span
                className={[
                  style.page,
                  currentPage === p ? style.selectedPage : '',
                ].join(' ')}
                onClick={() => {
                  onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
      </div>
      {portionCount > portionNumber && (
        <Button
          styleType="default"
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          next
        </Button>
      )}
    </div>
  );
};
