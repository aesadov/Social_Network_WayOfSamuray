import React from 'react';
import styles from '../paginator/Paginator.module.css';

type PaginatorPropsType = {
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
}

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize) //math.ceil - округляет до целого числа в большую сторону
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return <span className={currentPage === p ? styles.selectedPage : ''}
                         onClick={() => {
                             onPageChanged(p)
                         }}
                         key={p}>{p}</span>
            })
        }
    </div>
}

export default Paginator