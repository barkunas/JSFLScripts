fl.outputPanel.clear();
var fontArray = [];
var enterLocalPromt = prompt("Enter local here","ru");
var localizationIndex = enterLocalPromt; //set empty for none-localized .fla

for(litem in fl.getDocumentDOM().library.items){
	var lib = fl.getDocumentDOM().library.items[litem];
	if (lib == "[object SymbolItem]"){
		for (l in lib.timeline.layers){
			var layer = lib.timeline.layers[l];
			var enTextType = "";
			var otherTextType = "";
			var textName = "";
			for (f in layer.frames){
				var frame = layer.frames[f];
				if (frame.name=="en"){
					if(frame.elements[0]=="[object Text]"){
						enTextType = frame.elements[0].lineType;
						textName = frame.elements[0].name;
						fontLink = frame.elements[0].textRuns[0].textAttrs.url;
						isTTF = fontLink.indexOf('ttf')>=0||"false"
						//fl.trace(fontLink)
						//
						//for(p in frame.elements[0].textRuns){
						//	fl.trace(p+"-----------"+frame.elements[0].textRuns[p])
						//}
						//
					}
				}
				if (frame.name==enterLocalPromt){
					if(frame.elements[0]=="[object Text]"){
						otherTextType = frame.elements[0].lineType;
						otherFontLink = frame.elements[0].textRuns[0].textAttrs.url
						isOtherTTF = otherFontLink.indexOf('ttf')>=0||"false"
					}
				}				
			}
			if(enTextType!=otherTextType){
				var isDynamic = (textName.length>1)?"Dynamic":"Static";
				fl.trace("------"+isDynamic+"------ "+lib.name+" --------Please, change textType-------");
			}
			//if(fontLink!==otherFontLink){
			//	fl.trace(isTTF + " ------"+fontLink+"------- "+lib.name);
			//	fl.trace(isOtherTTF + " ------"+otherFontLink+"------- "+lib.name);
			//}
		}
	}
}
//fl.getDocumentDOM().setElementTextAttr('url', '222');
