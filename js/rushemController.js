/* Shuffler function randomizes order of input array. 
@param {array} array - Array to be shuffled.
*/
function shuffler (array) {
	var shuffle = [];
    for(var i=array.length;i>0;i--){
        var rand = Math.floor(Math.random()*i);
        var nextLine = array.splice(rand, 1);
        shuffle.push(nextLine[0]);
    };
    return shuffle;
};

/* passageCreator takes the shuffled array and returns an array with
the desired number of paragraphs of the desired length.
@param {array} shuffledArray - JSON array that has been shuffled in random order.
@param {number} passageLength - desired number of paragraphs 
@param {number} paragraphLength - desired number of sentences in each paragraph
*/

function passageCreator(shuffledArray, passageLength, paragraphLength){
	var passage = [];	
	for (var i=0;i<passageLength;i++){
        var paragraph = "";
		for (var j=0;j<paragraphLength;j++){
			if (j<(paragraphLength-1)){
				paragraph += shuffledArray.splice(0,1) + " ";
			} else {
				paragraph += shuffledArray.splice(0,1);
			}
		}
        shuffledArray = shuffledArray.splice((paragraphLength-1));
		passage.push(paragraph);
	}
	return passage;
}

var app = angular.module("rushemIpsum",["ngRoute"]);
app.controller('rushemController', function($scope){
	$scope.short = function() {
		ipsumClone = (JSON.parse(JSON.stringify(ipsum)));
		shuffled = shuffler(ipsumClone);
		$scope.lyrics = passageCreator(shuffled, 1, 8);
	};
	$scope.medium = function() {
		ipsumClone = (JSON.parse(JSON.stringify(ipsum)));
		shuffled = shuffler(ipsumClone);
		$scope.lyrics = passageCreator(shuffled, 3, 6);
	};
	$scope.long = function() {
		ipsumClone = (JSON.parse(JSON.stringify(ipsum)));
		shuffled = shuffler(ipsumClone);
		$scope.lyrics = passageCreator(shuffled, 5, 6)
	};
	$scope.epic = function() {
		ipsumClone = (JSON.parse(JSON.stringify(ipsum)));
		shuffled = shuffler(ipsumClone);
		$scope.lyrics = passageCreator(shuffled, 16, 10)
	};
});
