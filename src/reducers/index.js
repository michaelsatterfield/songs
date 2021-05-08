import { combineReducers} from "redux";


//Reducer
// static array
const songReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '4:00'},
        {title: 'All Star', duration: '3:40'},
        {title: 'Linger', duration: '3:45'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
    return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})
