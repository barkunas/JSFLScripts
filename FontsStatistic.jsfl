fl.outputPanel.clear();
var fontArray = [];
var enterLocalPromt = prompt("Enter local here","ru");
var localizationIndex = enterLocalPromt; //set empty for none-localized .fla
var numTextField = 0;
function remDuplicateGlyphs(inputStr)
{
	//fl.trace(inputStr);
	if (!inputStr)
		inputStr=" ";
	var	inputArray = inputStr.split("");
	inputArray.sort();
	var iA = 0;
	while(iA < inputArray.length) {
		while(iA < inputArray.length+1 && inputArray[iA] == inputArray[iA+1]) {
			inputArray.splice(iA, 1);
		}
		iA++;
	}
	return inputArray
	//fl.trace(inputArray);

}


for(litem in fl.getDocumentDOM().library.items)
{
	var lib = fl.getDocumentDOM().library.items[litem];
	
	if (lib == "[object SymbolItem]")
	{
		for (l in lib.timeline.layers)		
			{
				var layer = lib.timeline.layers[l];
				for (f in layer.frames)
				{
					var frame = layer.frames[f];
						{
							if (frame.name==localizationIndex)
						
							for (e in frame.elements)
								{
									var element = frame.elements[e];
									if(element.elementType == "text")
									{
							
										
										
										
									var includeText = remDuplicateGlyphs(element.textRuns[0].characters);
									var fontName = element.textRuns[0].textAttrs.face.slice(0, - 1);
									var Size = element.textRuns[0].textAttrs.size;
									var Color = element.textRuns[0].textAttrs.fillColor;
									var Filters = element.textRuns[0].textAttrs.filters;
									var URL = element.textRuns[0].textAttrs.url;
										if(!element.textRuns[0].textAttrs.url)
										{
											URL = "none"
										}
									var libName = lib.name	
									//findEmbedded(fontName);
									fl.getDocumentDOM().library;
									var selItems = fl.getDocumentDOM().library.selectItem(fontName);
							
									//var count = selItems.length;
									//for(var i=0; i<count; i++) 
									//currentItem = selItems[p];
									//if(currentItem.itemType == "font")
								
									fl.getDocumentDOM().library.selectItem(fontName);
									var embededFirst1 = fl.getDocumentDOM().library.getItemProperty(7);
									var embededSecond2 = remDuplicateGlyphs(fl.getDocumentDOM().library.getItemProperty(8));
									//fl.trace(embededFirst1);
									//fl.trace(fontName);
								
									var objArray = "------"+"\n"+libName+"\n"+fontName+" | "+Size+" | "+Color+"\n"+URL+/*" | "+Filters+*/"\n"+embededFirst1+" | "+embededSecond2+" | "+includeText;
									fontArray.push(objArray);
									//var fontKey = [fontName];
									//fl.trace(" | "+fontName+" | "+Size+" | "+Color+/*" | "+Filters+*/" | "+URL+" | "+embededFirst1+" | "+embededSecond2+" | "+includeText);
									//fl.trace(fontArray);
									++numTextField
							

							
						}
						
						
					}
				}
			}
		}
		
	}
}

fl.trace(fontArray.sort().join("\n"));
fl.trace("------------------------------------------");
fl.trace("Sum text field "+localizationIndex+"  =  "+numTextField)