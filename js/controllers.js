angular.module('redditCloneApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.add = {};
    $scope.article = {};
    $scope.comment = {};
    $scope.articles = [
      {
        title: 'Alaska: the Last Frontier',
        author: 'Alex',
        description: 'Alaska lorem ipsum',
        date: "2016-05-06T22:27:48.035Z",
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjqkIMiBBQqIIxK-MVoQIS0TF2peYDnSs-RBGdvvaUfn68TTvSJg',
        rating: 4,
        comments: []
      },
      {
        title: 'Deadliest Catch',
        author: 'Dan',
        date: "2014-01-09T22:27:48.035Z",
        description: 'Deadly lorem ipsum',
        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTeror9_1prRononbuqjY5THMIFawRjuA0aFgf0vjd7ZXpK1DjiZQ',
        rating: 2,
        comments: []
      },
      {
        title: 'Dr.Pol',
        author: 'Perry',
        date: "2015-10-03T22:27:48.035Z",
        description: 'vet lorem ipsum',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlxsE_kENW1Pevu8EZQzYEB-MkQDIWVvknxXHyFA83YoBIGRdCdg',
        rating: 7,
        comments: []
      }
    ];
    $scope.add.addArticle = function () {
      $scope.articles.push({
        title: $scope.article.title,
        author: $scope.article.author,
        date: new Date(),
        description: $scope.article.description,
        image: $scope.article.image,
        rating: 0,
        comments: []
      });
      $rootScope.root.showNewArticleWindow = false;
      $scope.article = {};
    };
    $scope.removeArticle = function (article) {
      console.log(article);
      $scope.articles.splice($scope.articles.indexOf(article),1);
    };
    $scope.upVote = function(article) {
      article.rating += 1;
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
