fl.outputPanel.clear();
var localization = prompt("enter localization or all","en");
function WORN(){
	fl.trace("!!!ATTANCION!!!");
};
function checkingLength(arr1,arr2){
	if(arr1.length==arr2.length){
		return true;
	}
		
};
function forin_getIthem(selectObject){
	
	var arr = [];
	for (i in selectObject){
		arr.push(i)
	}
	return arr;
};
function forin_getNameProp(importObject){
	var arr = [];	
	for (i in importObject){
		arr.push(importObject[i])
	}
	return arr;
};
fl.setActiveWindow(fl.documents[1]);
var firstDocument = fl.getDocumentDOM().library.items;
fl.setActiveWindow(fl.documents[0]);
var secondDocument = fl.getDocumentDOM().library.items;
//fl.trace(forin_getNameProp(firstDocument));

for (l in firstDocument){
	if (firstDocument[l] == "[object SymbolItem]"){
		if (firstDocument[l].lastModifiedDate!=secondDocument[l].lastModifiedDate){
			
			//fl.trace(forin_getNameProp(forin_getNameProp(firstDocument[l])));
			var firstTimelineDoc = firstDocument[l].timeline.layers;
			var secondTimelineDoc = secondDocument[l].timeline.layers;
			if(checkingLength(firstTimelineDoc,secondTimelineDoc)){
				for (L in firstTimelineDoc){
					var firstLayerDoc = firstTimelineDoc[L];
					var secondLayerDoc = secondTimelineDoc[L];
					if(checkingLength(firstLayerDoc.frames,secondLayerDoc.frames)){
						for(f in firstLayerDoc.frames){
						var firstFrameDoc = firstLayerDoc.frames[f];
						var secondFrameDoc = secondLayerDoc.frames[f];
						//fl.trace(secondFrameDoc.name);
						if(firstFrameDoc.name == localization || localization == "all"){
							if (checkingLength(firstFrameDoc.elements,secondFrameDoc.elements)){
								fl.trace("---------------------------------------------");
								fl.trace(firstDocument[l].name+"This object have some changes");
								for (e in firstFrameDoc.elements){
									var firstElement = firstFrameDoc.elements[e];
									var secondElement = secondFrameDoc.elements[e];
									//fl.trace(firstElement[4]);
									for (prop in firstElement){
										if(/*prop!="brightness" && prop!="tintColor"&&prop!="tintPercent"*/prop=="left"||prop=="top"||prop=="x"||prop=="y"||prop=="transformX"||prop=="transformy"||prop=="width"||prop=="height"){
											if(checkingLength(firstElement,secondElement)){
												//fl.trace(prop+" | "+firstElement[prop]);
												if(firstElement[prop]!==secondElement[prop]){
													fl.trace(prop+" | "+firstElement[prop]+" | "+secondElement[prop]);
												}
											}
											else fl.trace("Error! in count symbols. Please check all file");
										}
									}
									if(arraysIdentical(textProperty(firstElement),textProperty(secondElement))==false){
													fl.trace("Differents in text!!!");
												}
									
								}
							}
							else {fl.trace("Diffrent count of elements("+firstFrameDoc.elements.length+"vs"+secondFrameDoc.elements.length+") on frame № "+f+" at layer "+firstLayerDoc.name+" in mc"+firstDocument[l].name)};
						}
						}
						
								
								
						
						
					}
					else {fl.trace("Diffrent count of frames("+firstLayerDoc.frames.length+"vs"+secondLayerDoc.frames.length+") at layer "+firstLayerDoc.name+" in mc"+firstDocument[l].name)};
					
				}
			}
			else {fl.trace("Diffrent count of layers("+firstTimelineDoc.length+"vs"+secondTimelineDoc.length+") in "+firstDocument[l].name)};
			
		}
	}
}
function textProperty(elementTemp){			
	if(elementTemp.elementType == "text")
		{
			var innertext = elementTemp.textRuns[0].characters;
			var fontName = elementTemp.textRuns[0].textAttrs.face.slice(0, - 1);
			var Size = elementTemp.textRuns[0].textAttrs.size;
			var Color = elementTemp.textRuns[0].textAttrs.fillColor;
			var Filters = elementTemp.textRuns[0].textAttrs.filters;
			var URL = elementTemp.textRuns[0].textAttrs.url;
				if(!elementTemp.textRuns[0].textAttrs.url)
					{
					URL = "none"
					};
			var textPropertyArr = [innertext,fontName,Size,Color,Filters,URL];
			//fl.trace(textPropertyArr);
			return textPropertyArr;	
					
		}
		else return 1;
};
function arraysIdentical(a, b) {
    var i = a.length;
    if (i != b.length) return false;
    while (i--) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};