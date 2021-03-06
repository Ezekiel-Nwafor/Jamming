import React from 'react';
import Track from '../Track/Track';
import './TrackList';

class TrackList extends React.Component{
    render(){
        return(
            <div className='TrackList'>
                {this.props.tracks.map(track => <Track track={track} key={track.id}/>
                )}
            </div>
        )
    }
}

export default TrackList;