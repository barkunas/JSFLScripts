xjsfl.init(this);
	fl.showIdleMessage(false);
	fl.outputPanel.clear();
	var folderURI = fl.browseForFolderURL("Select a folder.");
	var sourceFolderPath = folderURI;
	var sourceFolder = new Folder(sourceFolderPath);
	
		if (!sourceFolder.exists) {
        throw Error('Source folder is not exists: "' + sourceFolderPath + '"');
		}
		
		sourceFolder.files.forEach(function init(file) {
			if (file.extension !== "fla") {
            return;
			}
			
		var sourceFile = fl.openDocument(file.uri);
		var difficult =  0
			
			for(litem in fl.getDocumentDOM().library.items) {
			var lib = fl.getDocumentDOM().library.items[litem];
				if (lib == "[object SymbolItem]") {
					for (l in lib.timeline.layers) {
					var layer = lib.timeline.layers[l];
						for (f in layer.frames)
				{
					var frame = layer.frames[f];
						{
													
							for (e in frame.elements)
								{
									var element = frame.elements[e];
									//fl.trace(element.elementType);
									if(element.elementType == "text")
									{
									difficult +=1;
									}
									if(element.elementType == "instance")
									{
									difficult +=2;
									}
								}
						}
				}
					}
				}
			}
		fl.trace(fl.getDocumentDOM().name + " | difficlt is  - " + difficult);
		sourceFile.close(false);
    }, this);