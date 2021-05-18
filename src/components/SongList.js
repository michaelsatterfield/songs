import React, {Component} from 'react';
import { connect } from "react-redux";
import {selectSong} from "../actions";


class SongList extends Component {
    renderList(){
       return this.props.songs.map( (song)=> {
           return(
               <div className={"item"} key={song.title}>
                   <div className={"right floated content"}>
                       <button className={"ui button primary"}
                       onClick={() => this.props.selectSong(song)}
                       >
                           Select
                       </button>
                   </div>

                   <div className={"content"}>{song.title}</div>
               </div>
           )
       })
    }





    render() {
        console.log(this.props)
        return (
            //calls the helper method above
            <div className={"ui divided list"}>{this.renderList()}</div>
        );
    }
}
//always define this to get props from store
const mapStateToProps = (state) => {
    console.log(state)
    return { songs: state.songs }
}
//always define this
export default connect(mapStateToProps, {selectSong})(SongList);

