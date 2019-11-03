//fl.outputPanel.clear();
//fl.getDocumentDOM().selection=[fl.getDocumentDOM().getTimeline().layers[2].frames[0].elements[0]];
//fl.trace("-- Now Layer is "+fl.getDocumentDOM().getTimeline().currentLayer);
var doc = fl.getDocumentDOM();
var currLayer = doc.getTimeline().currentLayer;
var libItems = [];
//fl.trace("layers # " + currLayer);
var keyFramesArr = [];
getKeyframes(currLayer);
//fl.trace("-- Frames with elements: " + keyFramesArr);
initPack(keyFramesArr,currLayer);
//fl.trace(libItems);
initSwap(libItems,keyFramesArr,currLayer);
initDelete(libItems);


function initDelete(libNameArr2){
	for(d=1;d<libNameArr2.length;d++){
		deleteItem(libNameArr2[d])
	}
}


function deleteItem(name1){
	fl.getDocumentDOM().library.deleteItem(name1);
};


function initSwap(itemNames,FramesArr1,currLayer){
	for(w=1;w<FramesArr1.length;w++){
		swapSymbol(itemNames[0],currLayer,FramesArr1[w])
	}	
};


function swapSymbol(itemName,currLayer,frame){
	setObjectOnStage(currLayer,frame)
	doc.swapElement(itemName);
}

function initPack(FramesArr,currLayer){
	//forTrace(FramesArr);
	//fl.trace("FramesArr is " + FramesArr+" and currlayer is "+currLayer)
	for(e=0;e<FramesArr.length;e++){
		//fl.trace("start process for frame: "+FramesArr[e])
		convertObjectToMocieClip(currLayer,FramesArr[e]);
		//fl.trace("end process for frame: "+FramesArr[e])
	}
	
};


function convertObjectToMocieClip(currLayer,frame){
	//fl.trace("старт упаковки в мувик");
	setObjectOnStage(currLayer,frame);
	//fl.trace("конец упаковки в  мувик");
	var mat = getTransformMatrix();
	doc.resetTransformation();
	doc.convertToSymbol('movie clip', '', 'top left');
	libItems.push(doc.selection[0].libraryItem.itemName);
	doc.selection[0].matrix = mat;
	
	
};


function setObjectOnStage(currLayer,frame){
	var actualFrame = frame-1;
	//fl.trace(frame);
	//fl.trace("выделение вреймов");
	doc.getTimeline().setSelectedFrames(Number(actualFrame),Number(actualFrame));
	//doc.selectNone();
	//fl.trace("выделение обьекта");
	doc.selection = [fl.getDocumentDOM().getTimeline().layers[currLayer].frames[actualFrame].elements[0]];
	
};


function getTransformMatrix(){
	//forTrace(fl.getDocumentDOM().selection[0].matrix);
	return fl.getDocumentDOM().selection[0].matrix
};


function getKeyframes(currLayer){
	var framesarr = doc.getTimeline().layers[currLayer].frames;
	var framesArrlen = framesarr.length;
	//fl.trace(framesArrlen);
	for ( f in framesarr){
		var frame = framesarr[f];
		if ( f == frame.startFrame){
			//fl.trace(Text(frame.elements));
			if ( frame.elements!=false){
				f++;
				keyFramesArr.push(f);
			}
			/*for(e in frame){
				fl.trace(e+"-----"+frame[e]);
			}*/
			
		}
	}
};


function forTrace(traceit){
	for (i in traceit){
		fl.trace(i + "----------------" +traceit[i]);
	}
};
/*
fl.getDocumentDOM().convertToSymbol('movie clip', '', 'top left');
var lib = fl.getDocumentDOM().library;
if (lib.getItemProperty('linkageImportForRS') == true) {
lib.setItemProperty('linkageImportForRS', false);
}
else {
lib.setItemProperty('linkageExportForAS', false);
lib.setItemProperty('linkageExportForRS', false);
}
lib.setItemProperty('scalingGrid',  false);
//---------------------------------------------
fl.getDocumentDOM().transformSelection(0.904007, 0.423676, -0.423676, 0.904007);
-------------------------------------

fl.getDocumentDOM().selectNone();
------------------------------------------
fl.getDocumentDOM().swapElement('Symbol 6');


*/