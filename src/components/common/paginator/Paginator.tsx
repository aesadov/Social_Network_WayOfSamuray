import React, {useState} from 'react';
import styles from '../paginator/Paginator.module.css';
import  cn from 'classnames'

type PaginatorPropsType = {
    pageSize: number,
    totalItemsCount: number,
    currentPage: number,
    portionSize: number,
    onPageChanged: (pageNumber: number) => void,
}

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}: PaginatorPropsType) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize) //math.ceil - округляет до целого числа в большую сторону
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount/portionSize) //кол-во "порций" показанных страниц
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1 // номер левой границы порции
    const rightPortionNumber = portionNumber * portionSize // номер правой границы порции


    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>prev</button>}
        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map(p => {
            return <span className={ cn ({[styles.selectedPage] : currentPage === p}, styles.pageNumber)}
                         onClick={() => {
                             onPageChanged(p)
                         }}
                         key={p}>{p}</span>
            })
        }
        {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>}
    </div>
}

export default Paginator