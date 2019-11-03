xjsfl.init(this);
    var sourceFolderPath = "paste the path";
//var FP = browseForFileURL(*.fla);
var folderURI = fl.browseForFolderURL("Select a folder.");
//var folderContents = FLfile.listFolder(folderURI);
//sourceFolderPath = folderContents;
sourceFolderPath = folderURI;
//sourceFolderPath = prompt('исходная папка', sourceFolderPath);
    var sourceFolder = new Folder(sourceFolderPath);
    if (!sourceFolder.exists) {
        throw Error('Source folder is not exists: "' + sourceFolderPath + '"');
    }

    sourceFolder.files.forEach(function init(file) {
        if (file.extension !== "fla") {
            return;
        }

       
        
            var sourceFile = fl.openDocument(file.uri);
		var includeLocalization=false;	
		for(litem in fl.getDocumentDOM().library.items)

		{
			
			var lib = fl.getDocumentDOM().library.items[litem];
			if (lib == "[object SymbolItem]")
			{
				for (l in lib.timeline.layers)		
				{
					var layer = lib.timeline.layers[l];
					if (layer.name.indexOf("l11n")>=0||layer.name.indexOf("localization")>=0)
					includeLocalization = true;
					break;
				}
			}
		}
		if (includeLocalization)
		{
								
			fl.showIdleMessage(false);	
			fl.runScript(fl.configURI + "LocalizationTool/localizationTool.js");
			var exportResult = TaskManager.instance.exportLobbyLocalization();
		}
			sourceFile.close(false);
			
           
    }, this);