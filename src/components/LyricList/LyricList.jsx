import React from 'react';
import classes from './LyricList.module.css';

const LyricList = ({ list, handleFullLyric }) => {

    let { title,album: {title: albumTitle}, artist: {name: artistName} } = list;
    
    return (
        <div className='search-result col-md-8 mx-auto'>
            {/* single result  */}
            <div className={[classes.singleresult, 'row', 'align-items-center', 'my-3', 'p-3'].join(' ')}>
                <div className="col-md-9">
                <h3 className="lyrics-name">{ title }</h3>
                <p className="author lead">Album by <strong>{ albumTitle }</strong></p>
                </div>
                <div className="col-md-3 text-md-right text-center">
                    <button onClick={() => handleFullLyric(artistName, title)} className="btn btn-success">Get Lyrics</button>
                </div>
            </div>
            {/* ./ single result  */}

        </div>
    );
};

export default LyricList;