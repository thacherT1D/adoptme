angular.module('redditCloneApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.add = {};
    $scope.article = {};
    $scope.comment = {};
    $scope.articles = [
      {
        title: 'Change Dexcom Sensor',
        rating: 0,
        description: 'Should last 7+ days',
        date: "2016-05-06T22:27:48.035Z",
        comments: ["2016-05-06T22:27:48.035Z"]
      },
    ];

    $scope.add.addArticle = function () {
      $scope.articles.push({
        title: $scope.article.title,
        rating: 0,
        description: $scope.article.description,
        date: 0,
        comments: []
      });
      $rootScope.root.showNewArticleWindow = false;
      $scope.article = {};

    };

    $scope.upVote = function(article) {
      article.rating += 1;
      // article.comments.push(new Date);
      article.comments.splice(0,0,new Date);
      article.date = new Date;
    };

    $scope.removeArticle = function (article) {
      console.log(article);
      $scope.articles.splice($scope.articles.indexOf(article),1);
    };


    $scope.downVote = function(article) {
      article.rating -= 1;
    };
    $scope.addComment = function(article) {
      article.comments.push({
        newAuthor: article.newAuthor,
        newComment: article.newComment,
        newCommentDate: article.newCommentDate = new Date()
      });
      article.newAuthor = '';
      article.newComment = '';
      article.newCommentDate = '';
      article.showCommentWindow = false;
      article.showCommentList = true;
    };
    $scope.toggleComments = function (article) {
      if(article.showCommentList == true) {
        article.showCommentList = false;
      } else {
        article.showCommentList = true;
      }
    };
  });
