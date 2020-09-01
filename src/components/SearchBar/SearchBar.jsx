import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = ({handleOnChange}) => {
    return (
        <div className="search-bar col-md-6 mx-auto">
            <h1 className="text-center">Lyrics Search</h1>
            <form>
                <div className={[classes.searchBox, 'my-5'].join(' ')}>
                    <input type="text" onChange={handleOnChange} className={[classes.formControl, 'form-control'].join(' ')} placeholder="Enter your artist song name" />
                    <button className={[classes.searchBtn, 'btn', 'btn-success'].join(' ')}>Search</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;