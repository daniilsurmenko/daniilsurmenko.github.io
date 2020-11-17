(function() {
    var video = document.getElementById('video'),
     vendorUrl = window.URL || window.webkitURL;
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.
  mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({
     video: true,
     audio: false
    }, async function(stream) {
        const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
        video.srcObject = mediaStream;
        video.play();
    }, function(error) {
     alert('Ошибка! Что-то пошло не так, попробуйте позже.');
    });
  })();