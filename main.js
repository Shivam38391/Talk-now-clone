let localStream;
let remoteStream;
let init = async () => {

   localStream=  await navigator.mediaDevices.getUserMedia({video:true, audio:true})
    // .then(function(stream) {

    //     let vi =  document.getElementById('user-1')
    //     vi.srcObject = stream;

    //     // var video = document.querySelector('video');
    //     // video.srcObject = stream;

    // })

    let vi =  document.getElementById('user-1')
    vi.srcObject = localStream
    // document.getElementById('user-2').remoteStream = localStream;


}









// Request access to the user's video and audio
// navigator.mediaDevices.getUserMedia({video: true, audio: true})
//   .then(function(stream) {
//     // Do something with the stream, such as displaying it in a video element
    // var video = document.querySelector('video');
    // video.srcObject = stream;
//   })
//   .catch(function(error) {
//     // Handle the error, such as displaying an alert message
//     console.error(error);
//     alert('Something went wrong!');
//   });



init() 