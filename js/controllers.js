(function () {
  'use strict'

angular

.module('redditCloneApp')
.controller('MainCtrl', MainCtrl);

function
MainCtrl($scope, $rootScope) {
    $scope.add = {};
    $scope.article = {};
    $scope.comment = {};
    $scope.instance = 0;
    $scope.articles = [
      {
        title: 'Change Dexcom Sensor',
        rating: 0,
        description: 'Should last 7+ days',
        date: "2016-05-06T22:27:48.035Z",
        comments: ["2016-05-16T22:27:48.035Z", "2016-05-06T22:27:48.035Z"]
      },
      {
        title: 'Change OmniPod Pod',
        rating: 0,
        description: 'Should last 3 days, can stretch an additional 8 hrs',
        date: "2016-05-06T22:27:48.035Z",
        comments: ["2016-05-16T22:27:48.035Z", "2016-05-06T22:27:48.035Z"]
      }
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
      $scope.articles.splice($scope.articles.indexOf(article),1);
    };

    $scope.removeInstance = function(article) {
      // console.log('removeInstance worked');
      // var index = $index;
      // $scope.article.comments.splice($scope.article.comments.indexOf($index),1);
      console.log($scope.article.comments($index));
    };

    // $scope.downVote = function(article) {
    //   article.rating -= 1;
    // };
    // $scope.addComment = function(article) {
    //   article.comments.push({
    //     newAuthor: article.newAuthor,
    //     newComment: article.newComment,
    //     newCommentDate: article.newCommentDate = new Date()
    //   });
    //   article.newAuthor = '';
    //   article.newComment = '';
    //   article.newCommentDate = '';
    //   article.showCommentWindow = false;
    //   article.showCommentList = true;
    // };
    $scope.toggleComments = function (article) {
      if(article.showCommentList == true) {
        article.showCommentList = false;
      } else {
        article.showCommentList = true;
      }
    };
  }
})();
