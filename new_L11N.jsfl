fl.outputPanel.clear();
var doc = fl.getDocumentDOM();
var getActualTimeline = doc.getTimeline();
var currLayer = getActualTimeline.currentLayer;
var actualFramesArr = getActualTimeline.layers[currLayer].frames;
var layerName = getActualTimeline.getLayerProperty(0);
var nameFrames = ["en","jp","ru"]
if(~layerName.indexOf('l11n')){
	getActualTimeline.setSelectedFrames([]);
}
else{
getActualTimeline.setLayerProperty('name', 'l11n:' + layerName)	
};
fl.getDocumentDOM().getTimeline().copyFrames(0);

if(actualFramesArr.length==1){
	fl.getDocumentDOM().getTimeline().pasteFrames(1);
	fl.getDocumentDOM().getTimeline().pasteFrames(2);
};
if(actualFramesArr.length==2){
	fl.getDocumentDOM().getTimeline().pasteFrames(2);
};

for(f=0;f<3;f++){
	fl.getDocumentDOM().getTimeline().layers[currLayer].frames[f].name = nameFrames[f];
};



