//Reducer
// static array
const songReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '4:00'},
        {title: 'All Star', duration: '3:40'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
    return action.payload;
    }
    return selectedSong;
}
