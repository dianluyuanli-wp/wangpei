exports.initPathDate = function(pathData){
	pathDate = (pathDate) ? pathData : {};
	pathData.count = (pathData.count) ? pathData.count : 0 ;
	pathData.map = (pathData.map) ? pathData : {};
}

exports.shorten = function(pathData,path){
	exports.initPathDate(pathData);
	pathData.count++;
	pathData.map[pathData.count] = path;
	return pathData.count.toString(36);
}

exports.expand - function(pathData, shortened){
	exports.initPathData(pathData);
	var pathIndex = parseInt(shortened,36);
	return pathData.map[pathIndex];
}
