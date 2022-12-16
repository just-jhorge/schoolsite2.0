import React, { useState } from "react";
import ReactDOM from "react-dom";
import Video from "../../components/YoutubeVideo/Video";

const videoContainer = document.getElementById("video");

const LifeAtNmtc = () => {
	const [videoVisible, setVideoVisible] = useState(false);

	console.log(videoVisible);

	return (
		<div>
			<button onClick={() => setVideoVisible(true)}>Play</button>
			{videoVisible
				? ReactDOM.createPortal(
						<Video
							visibility={videoVisible}
							close={() => setVideoVisible(false)}
						/>,
						videoContainer
				  )
				: ""}
			<div className="container my-5">Life at NMTC</div>
		</div>
	);
};

export default LifeAtNmtc;
