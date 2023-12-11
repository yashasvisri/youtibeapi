
const apiKey = "AIzaSyALM-ajB-uNavwf_kXVZNCNFEeLAV-1Yuk";

const videoId = "37E9ckMDdTk";


function loadYouTubeApi() {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}


function onYouTubeIframeAPIReady() {
  const player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}


function onPlayerReady(event) {

  alert("YouTube player is ready!");

  console.log("Player is ready. Video duration:", event.target.getDuration());

 
}

function onPlayerStateChange(event) {
  

  switch (event.data) {
    case YT.PlayerState.ENDED:

      console.log("Video has ended");
      break;

    case YT.PlayerState.PLAYING:
  
      console.log("Video is now playing");
      break;

    case YT.PlayerState.PAUSED:
   
      console.log("Video is paused");
      break;

    case YT.PlayerState.BUFFERING:
     
      console.log("Video is buffering");
      break;

    case YT.PlayerState.CUED:

      console.log("Video is cued");
      break;

    default:

      console.log("Player state:", event.data);
  }

  
}


loadYouTubeApi();
