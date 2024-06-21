import React, { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
              <div  style={{position:'fixed', width:'100%', height:'100vh', backgroundColor:'rgba(0, 0, 0, 0.404)', zIndex:999, top:'0', left:0}}>
                <div className='loading'>
                <div className="lds-dual-ring"></div>
                </div>
              </div>
        )
    }
}

export default Loading