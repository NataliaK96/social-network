import React from 'react';
import style from './Users.module.scss';

export const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.number}>
      {pages.map((p) => {
        return (
          <span
            className={(
              props.currentPage === p && style.selectedPage
            ).toString()}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
