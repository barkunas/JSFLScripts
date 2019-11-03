fl.outputPanel.clear()
xjsfl.init(this);
fl.showIdleMessage(false);

var folderURI = fl.browseForFolderURL("Select a folder.");
var sourceFolderPath = folderURI;
//var sourceFolder = new Folder(sourceFolderPath);
var canvasWidth = 4550
var canvasHeight = 2560
var centerPosotion = {x:canvasWidth/2,y:canvasHeight/2}
var storage = {}
String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
recursiveFlaInFolders(sourceFolderPath);
/*
if (!sourceFolder.exists) {
	throw Error('Source folder is not exists: "' + sourceFolderPath + '"');
}
recursiveFlaInFolders(sourceFolderPath);

sourceFolder.files.forEach(function init(file) {
	if (file.extension !== "fla") {
		return;
	}
	var sourceFile = fl.openDocument(file.uri);
	findAndSaveParticles(sourceFile)
	sourceFile.close()
}, this);*///старый способ

fl.trace(JSON.encode(storage))


function findAndSaveParticles(document){
	var mainDoc = document
	var mainLib = mainDoc.library
	var lib = fl.getDocumentDOM().library.items
	var publishSymbols = {}
	for(item in lib){
		if(lib[item]=="[object SymbolItem]"){
			var timeline = lib[item].timeline
			if(timeline){
				var layers = timeline.layers;
				for(layer in layers){
					var frames = layers[layer].frames
					for(frame in frames){
						var elements = frames[frame].elements
						for(elem in elements){
							var element = elements[elem]
							if(element=="[object CompiledClipInstance]"){
								var segment = new Date().getTime()
								var value = element.parameters.values.value
								value  = value.replace(/particleTexture.+?,/,"")
								summHash = ""+value.hashCode()
								if(!(lib[item].name in publishSymbols)&&!(summHash in storage)){
									storage[summHash] = true;
									publishSymbols[lib[item].name] = true
									//fl.trace(value)
									
									
									
									
									var newDoc = fl.createDocument();
								
									newDoc.width = canvasWidth;
									newDoc.height = canvasHeight;
									newDoc.addItem(centerPosotion, lib[item]);//работает, все норм
									fl.saveDocument(newDoc,"file:///E|/BingoSVN/particlesLibrary/"+segment+".fla")
									
									newDoc.close()
								}
							}					
						}
					}
				}
			}
		}
	}
}
//новый способ
function recursiveFlaInFolders(uri){
	var sourceFolder = new Folder(uri);
	
	sourceFolder.files.forEach(function (file){
		if(file.extension!="fla"){
			return
		}
		var filePath = file.uri;
		var sourceFile = fl.openDocument(filePath);
		findAndSaveParticles(sourceFile)
		sourceFile.close()
		fl.trace("--- "+filePath)
	});
	
	sourceFolder.folders.forEach(function (folders){
		var folderPath = folders.uri;
		fl.trace(folderPath)
		recursiveFlaInFolders(folderPath)
	});
}