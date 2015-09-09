var topics = ['Learner', 'Growth Hacker', 'Web Developer', 'Data Analyst'];
var topicIndex = 0;
var writingIndex = 0;

$(document).ready(function() {
	writeNextWord();
});

function writeNextWord() {
	writingIndex = 0;
	writeWord();
	topicIndex++;
	if(topicIndex >= topics.length) topicIndex = 0;
}

function writeWord() {
	writingIndex++;
	if(writingIndex > topics[topicIndex].length) return setTimeout(removeWord, 1500);

	var part = topics[topicIndex].substr(0, writingIndex);
	$('.typing').text(part);

	setTimeout(writeWord, 100);
}

function removeWord() {
	var text = $('.typing').text();
	var newText = text.substr(0, (text.length - 1))
	$('.typing').text(newText);

	if(newText.length <= 0) return setTimeout(writeNextWord, 100);
	setTimeout(removeWord, 100);
}

$('.typing').after('<span class=\'blinking\'>|</span>')


