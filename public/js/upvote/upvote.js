$('#topic').upvote();
$('#topic').upvote({count: 5, upvoted: 1});
$('#topic').upvote({count: 5, downvoted: 1});
$('#topic').upvote({count: 5, upvoted: 1, starred: 1});
 
var callback = function(data) {
    $.ajax({
        url: '/vote',
        type: 'post',
        data: { id: data.id, up: data.upvoted, down: data.downvoted, star: data.starred }
    });
};
$('#topic-123').upvote({id: 123, callback: callback});