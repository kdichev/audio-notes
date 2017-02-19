// handle user media capture
export function captureUserMedia(callback) {
  var params = { audio: true, video: false };

  navigator.getUserMedia(params, callback, (error) => {
    alert(JSON.stringify(error));
  });
};
