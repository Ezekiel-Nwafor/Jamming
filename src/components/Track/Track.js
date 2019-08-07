import React from 'react';
import './Track'

class Track extends React.Component{

  renderAction(){
    if(isRemoval){
      return <button className='Track-action'> - </button>
    }else{
      return <button className='Track-action'> + </button>
    }
  }

  render(){
    return(
      <div className='Track-information'>
        <h3>{this.props.track.name}</h3>

        <p> {this.props.track.artist} | {this.props.track.album}
        </p>

        <button className='Track-action'>
        {/* + or a - will go here */}
        </button>
      </div>
    )
  }
}

export default Track;