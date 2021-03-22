import React from 'react';
import styles from './SearchResult.module.css'
import { BusinessRating } from '../../BusinessRating/BusinessRating'

export function SearchResult(){
    return(
        <div className={ styles['search-result']}>
            <img src='https://via.placeholder.com/210' alt='Business' className={ styles['business-image']}/>
            <div className={styles['business-info']}>
                <h2 className='subtitle'>Burger Place</h2>
                <BusinessRating/>
                <p>$$</p>
                <span className="tag">Burgers</span> <span className="tag">Fast Food</span>
            </div>
            <div className="contact-info">
                <p>+1234234324</p>
                <p>Street 5</p>
                <p>12345 Berlin</p>
            </div>
        </div>
    );
}