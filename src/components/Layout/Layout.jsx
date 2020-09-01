import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import LyricList from '../LyricList/LyricList';
import Lyric from '../Lyric/Lyric';

const Layout = () => {
    const [lyricList, setLyricList] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [lyric, setLyric] = useState({lyric: '', title: ''});
    // console.log(lyricList.length)

    useEffect(() => {
        if (keyword) {
            fetch(`https://api.lyrics.ovh/suggest/${keyword}`)
            .then(res => res.json())
            .then(data => setLyricList(data.data))
        }
    },[keyword]);

    // Get lyric list
    const handleOnChange = (e) => {
        setKeyword(e.target.value);
    }

    //Get full lyric
    const handleFullLyric = (artist, title) => {
        fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(response => response.json())
        .then(data => setLyric({lyric: data.lyrics, title:title}));
    }

    return (
        <div className="container">
            <Header />
            <main className="content-area">
                <SearchBar handleOnChange={handleOnChange} />
                {
                    lyricList.map(lS => <LyricList key={lS.id} list={lS} handleFullLyric={handleFullLyric} />)
                }
                <Lyric fullLyric={lyric} />
            </main>
        </div>
    );
};

export default Layout;