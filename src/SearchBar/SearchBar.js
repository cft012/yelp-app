import React, {useState} from 'react';
import styles from './SearchBar.module.css'


export function SearchBar(props){
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function submit(e) {
        if(typeof props.search === 'function'){
            props.search(term, location);
        }
        console.log(term, location);
        e.preventDefault();
    }

    const sizeClass = props.small ? '' : 'is-medium'
    return(
        <form onSubmit={submit}>
            <div className="field has-addons">
                <div className="control">
                    <button className={`button is-info ${sizeClass}`}>Search</button>
                </div>
                <div className="control">
                    <input className={`input ${sizeClass} ${styles["input-control"]}`}
                    onChange={ (e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Burgers, Barbars"/>
                </div>
                <div className="control">
                    <div className={`button is-info ${sizeClass}`}>Near</div>
                </div>
                <div className="control">
                    <input className={`input ${sizeClass} ${styles["input-control"]}`}
                    onChange={ (e) => setLocation(e.target.value)}
                    type="text"
                    placeholder="Where"/>
                </div>
                <div className={`button ${sizeClass} ${styles["search-button"]}`} onClick={submit}>
                    <span className={`icon is-small ${styles["search-icon"]}`}>
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
        </form>
    )
}