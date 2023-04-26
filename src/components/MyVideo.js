import React from "react";
import ReactPlayer from "react-player/youtube";

const MyVideo = (props) => {
    return (
        <ReactPlayer 
        url={props.url} 
        playing={false}
        volume={.5} />
    )
}

export default MyVideo;