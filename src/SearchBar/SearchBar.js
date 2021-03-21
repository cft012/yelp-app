import React from 'react';
import styles from './SearchBar.module.css'


export function SearchBar(props){
    const sizeClass = props.small ? '' : 'is-medium'
    return(
        <div className="field has-addons">
            <div className="control">
                <button className={`button is-info ${sizeClass}`}>Search</button>
            </div>
            <div className="control">
                <input className={`input ${sizeClass} ${styles["input-control"]}`} type="text" placeholder="Burgers, Barbars"/>
            </div>
            <div className="control">
                <button className={`button is-info ${sizeClass}`}>Near</button>
            </div>
            <div className="control">
                <input className={`input ${sizeClass} ${styles["input-control"]}`} type="text" placeholder="Where"/>
            </div>
            <div className={`button ${sizeClass} ${styles["search-button"]}`}>
                <span className={`icon is-small ${styles["search-icon"]}`}>
                    <i className="fas fa-search"></i>
                </span>
            </div>
        </div>
    )
}