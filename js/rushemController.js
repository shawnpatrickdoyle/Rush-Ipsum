

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

var effects = function(){
	jQuery(".lyrics").show();
	jQuery("footer").hide();
	jQuery(".replaceFooter").show();
	var ipsumClone = (JSON.parse(JSON.stringify(ipsum)));
	var shuffled = shuffler(ipsumClone);
    return shuffled;
};

var app = angular.module("rushemIpsum",["ngRoute"]);
app.controller('rushemController', function($scope){
	$scope.short = function() {
		var shuffled = effects();
		$scope.lyrics = passageCreator(shuffled, 1, 8);
	};
	$scope.medium = function() {
		var shuffled = effects();
		$scope.lyrics = passageCreator(shuffled, 3, 8);
	};
	$scope.long = function() {
		var shuffled = effects();
		$scope.lyrics = passageCreator(shuffled, 5, 8)
	};
	$scope.epic = function() {
		var shuffled = effects();
		$scope.lyrics = passageCreator(shuffled, 16, 10)
	};
});

var clipboard = new Clipboard('.copy');
	clipboard.on('success', function(e) {
        console.log(e)
    });
    clipboard.on('error', function(e) {
        console.log("error");
    });

var title = jQuery("#title"),
	header = jQuery('header'),
	subtitle = jQuery('#subtitle'),
	footer = jQuery('footer')
	article = jQuery('article');
jQuery(window).scroll(function() {
	var position = jQuery(document).scrollTop();
	console.log(position);
  	if (position > 228) {
	    header.removeClass("normal").addClass("scroll");
	    title.removeClass("title").addClass("title-scroll");
	    subtitle.removeClass("subtitle").addClass("subtitle-scroll");
	    article.addClass("scroll");
	    footer.addClass("scroll");
	    jQuery('h3').addClass("scroll");
  	}
});
jQuery(window).scroll(function() {
	var position2 = jQuery(document).scrollTop();
	if (article.hasClass("scroll") && position2 < 229){
		if (position2 > 0) {
			console.log ("position2:" + position2);
			article.css("top", position2+72)
			}
		 else {
		article.removeClass("scroll").addClass("scrollLock");
		};
	}
});
