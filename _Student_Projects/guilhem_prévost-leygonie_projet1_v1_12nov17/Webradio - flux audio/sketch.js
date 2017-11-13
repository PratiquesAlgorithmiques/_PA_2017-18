// # grab p5.sound audio context
var audioCtx = getAudioContext();

// # create a reference to the <audio> element
var myMediaElement = document.getElementById('my-stream');

// # create a media element source node
var source = audioCtx.createMediaElementSource(myMediaElement);

// # connect to p5 master output
source.connect(p5.soundOut)