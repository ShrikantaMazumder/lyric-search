import React from 'react';

const Lyric = ({ fullLyric }) => {
    const {lyric, title} = fullLyric;
    return (
        <div className="single-lyrics text-center">
            <button className="btn go-back">&lsaquo;</button>
    <h2 className="text-success mb-4">{ title ? title : 'Search Your Song' }</h2>
            <pre className="text-white">
                {lyric}
            </pre>
        </div>
    );
};

export default Lyric;