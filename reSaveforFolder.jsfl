xjsfl.init(this);
	var folderURI = fl.browseForFolderURL("Select a folder.");
	//var FilePath = prompt("Enter folder path", "write here");
	//E:\new_svn\Slotomania_games1\game384\mobile
    //var sourceFolderPath = "file:///E|/new_svn/Slotomania_games1/game360/mobile";
	//promt(FilePath)
	var sourceFolderPath = folderURI;
	//uriContextConvertToURI(URI)
	var sourceFolder = new Folder(sourceFolderPath);
    if (!sourceFolder.exists) {
        throw Error('Source folder is not exists: "' + sourceFolderPath + '"');
    }

    sourceFolder.files.forEach(function init(file) {
        if (file.extension !== "fla") {
            return;
        }

       
        
            var sourceFile = fl.openDocument(file.uri);
				
		
			var isLocked = fl.getDocumentDOM().getTimeline().getLayerProperty('locked');
			// true; false
			sourceFile.getTimeline().setLayerProperty('locked', !isLocked); //false; true
			sourceFile.getTimeline().setLayerProperty('locked', isLocked); //true; false
			sourceFile.save(false);
			sourceFile.close(false);
           
    }, this);

