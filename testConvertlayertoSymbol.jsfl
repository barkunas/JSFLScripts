xjsfl.init(this);
	fl.showIdleMessage(false);
	fl.outputPanel.clear();
			var difficult =  0
			
			for(litem in fl.getDocumentDOM().library.items) {
			var lib = fl.getDocumentDOM().library.items[litem];
				if (lib == "[object SymbolItem]") {
				for (l in lib.timeline.layers) {
				var layer = lib.timeline.layers[l];
					
				var findkeyFrame = 0;
				var keyFrameArr = [];
					
				for (f in layer.frames)
				{
					var frame = layer.frames[f];
						{
							
							//fl.trace(frame[4]);
							if(frame.duration != findkeyFrame)
							{
								findkeyFrame = frame.duration;
								//fl.trace("is keyframe");
								//fl.trace(frame[4]);
								keyFrameArr.push(frame[4]);
								//for(h in frame){
								//fl.trace(frame[h]);
							//}
							}
							
							
							
							if (frame[6] == "none")
								
							
							{
							for (e in frame.elements)
								{
									var element = frame.elements[e];
									//fl.trace(element.elementType);
									if(element.elementType == "instance")
									{
										//fl.trace(element.elementType);
									difficult +=1;
									}
								}
							}
						}
				}
					}
				}
			}
		//fl.trace(" | difficlt is  - " + difficult);
		fl.trace(keyFrame);
for (var j in keyFrame){
	var frameNum = keyFrame[j]+1
	fl.getDocumentDOM().getTimeline().setSelectedFrames(frameNum,frameNum);
	fl.trace("now keyFrame is"+keyFrame[j]);
	//fl.getDocumentDOM().selectAll();
	//fl.trace(fl.getDocumentDOM().getElementProperty(0));
	for (e in frame.elements)
		{
			var element = frame.elements[e];
			//fl.trace(element.elementType);
			if(element.elementType == "instance")
				{
					fl.trace(element.scaleX);
					
									
				}
		}
};
  
 ;
//fl.getDocumentDOM().getTimeline().setSelectedFrames([]);
//fl.getDocumentDOM().getTimeline().setSelectedFrames([]);
//fl.getDocumentDOM().getTimeline().setSelectedFrames([]);
//fl.getDocumentDOM().selectAll();
//fl.getDocumentDOM().transformSelection(1, 0, 0, 1.189987);
