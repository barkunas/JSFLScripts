﻿fl.outputPanel.clear();

var fontArray = [];
var enterLocalPromt = prompt("Enter local here, or write "+"all","en");
var localizationIndex = enterLocalPromt; //set empty for none-localized .fla


fl.setActiveWindow(fl.documents[1]);
for(litem in fl.getDocumentDOM().library.items)
{	
	fl.setActiveWindow(fl.documents[1]);
	var lib = fl.getDocumentDOM().library.items[litem];
	
	if (lib == "[object SymbolItem]")
	{
		for (l in lib.timeline.layers)		
			{
				var layer = lib.timeline.layers[l];
				if(layer[1] == "normal")
				{
				for (f in layer.frames)
				{
					var frame = layer.frames[f];
						{
							if (frame.name==localizationIndex || localizationIndex=="all")
							{
							for (e in frame.elements)
								{
									var element = frame.elements[e];
									var mat1 = [];
									var libName = lib.name;
									mat1 = mat1.concat(getMatrixObjectArr(element));
									//mat1 = mat1.concat(element.matrix);
									//for(m in element.matrix){fl.trace(element.matrix[m]);};
									
									mat1.push(element.x,element.y,element.width,element.height);
									mat1 = mat1.concat(textProperty(element));
									//fl.trace(libName+" | "+mat1);
									//-----------------------------------------------------
									
									fl.setActiveWindow(fl.documents[0]);
									//var litem2 = fl.getDocumentDOM().library.items.name
									//if (litem.lastModifiedDate != litem2.lastModifiedDate)
									
									
									if(lib.lastModifiedDate!=fl.getDocumentDOM().library.items[litem].lastModifiedDate)
									{
										
									
									//-----------------------------------------------------
									fl.getDocumentDOM().library.editItem(libName)
									//var t = l
									/*for ( t in fl.getDocumentDOM().getTimeline().layers)
										{*/
											var layer2 = fl.getDocumentDOM().getTimeline().layers[l/*t*/];
											/*for ( f2 in layer2.frames)
												{*/
													var frame2 = layer2.frames[f];
													if (frame2.name==localizationIndex || localizationIndex=="all")
													{
														//fl.trace("---------------"+libName+"---------------");
														
														if (frame2.elements.length == frame.elements.length)
														{
														//for (e in frame2.elements)
														//{
															
															
															var element2 = frame2.elements[e];
															var mat2 = [];
															mat2 = mat2.concat(getMatrixObjectArr(element2));
															//mat2 = mat2.concat(element2.matrix);
															mat2.push(element2.x,element2.y,element2.width,element2.height);
															mat2 = mat2.concat(textProperty(element2));
															//fl.trace(mat1+"\n"+mat2);
															var resultMat =  arraysIdentical(mat1, mat2);
															if (resultMat == false){
																
															fl.trace("----------------------------------------------\nAHTUNG!!!! differents in " + libName +"\n"+ mat1 + "\n" + mat2 );
															fl.trace(frame2.elements.length + "--|--" + frame.elements.length);
															}
															//else fl.trace(mat1 + "\n" + mat2);
															
															
															
															
														//}
														}
														else fl.trace("AHTUNG!!!! different number of objects in  " + libName );
													}
												}
										//}
									
						
						
								}
							}
				}
			}
		}
	}
	
}
	
	
	
	
	
	
	
}
function arraysIdentical(a, b) {
    var i = a.length;
    if (i != b.length) return false;
    while (i--) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};
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
function getMatrixObjectArr(elementTemp)
{	var arr = [];
	for (m in elementTemp.matrix)
		{
			arr.push(element.matrix[m]);
		}
	return arr;
}