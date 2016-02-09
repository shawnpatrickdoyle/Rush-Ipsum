app.controller('rushemController',function($scope, $http){
	$http.get("lyric.json")
	.then(function(response){
		var lyrics = response.data,
			shuffled = []
			firstParagraph = [],
			secondParagraph = [],
			thirdParagraph = [],
			fourthParagraph = [],
			fifthParagraph = [],
			sixthParagraph = [],
			seventhParagraph = [],
			eigthParagraph = [],
			ninthParagraph = [],
			tenthParagraph = [],
			eleventhParagraph = [],
			twelfthParagraph = [],
			thirteenthParagraph = [],
			fourteenthParagraph = [],
			fifteenthParagraph = [],
			sixteenthParagraph = [],

	});
});
function shuffler (array) {
	var shuffle = [];
    for(var i=array.length;i>0;i--){
        var rand = Math.floor(Math.random()*i);
        var nextLine = array.splice(rand, 1);
        shuffle.push(nextLine[0]);
    };
    return shuffle
}