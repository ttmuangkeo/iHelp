angular.module('myCtrls', ['somethingServices'])
    .controller('feedCtrl', ['$scope', function($scope) {
        $scope.users = [{
            name: 'Jing Redman',
            tags: 'cooking',
            img: 'img/1.jpg'
        }, {
            name: 'Josh Sera',
            tags: 'driving',
            img: 'img/3.jpg'
        }, {
            name: 'Alyson Dietz',
            tags: 'teaching',
            img: 'img/2.jpg'
        }];

    //     var key = 'AIzaSyAvXicL5S7E64gpIVFNNxYkwgTyvAKijdU';
    //     var youtube = [];
    //     $scope.myInterval = 2000;
    //     $scope.noWrapSlides = false;
    //     $scope.active = 0;
    //     $scope.slides = [{
    //         image: 'img/4.jpg'
    //     }, {
    //         image: 'img/2.jpg'
    //     }, {
    //         image: 'img/3.jpg'
    //     }, {
    //         image: 'img/5.jpg'
    //     }, {
    //         image: 'img/6.jpg'
    //     }, {
    //         image: 'img/1.jpg'
    //     }, {
    //         image: 'img/7.jpg'
    //     }];
    //     $http({
    //         url: 'http://ufc-data-api.ufc.com/api/v3/iphone/fighters/title_holders'
    //     }).then(function success(res) {
    //         $scope.title = res.data

    //     }).catch(function error(err) {
    //         console.log(err);
    //     });
    // }])
    // .controller('FighterCtrl', ['$scope', '$http', function($scope, $http) {
    //     $http({
    //         url: 'http://ufc-data-api.ufc.com/api/v3/iphone/fighters/',
    //     }).then(function success(req) {

    //         $scope.fighters = req.data
    //     }).catch(function error(err) {
    //         console.log(err);
    //     })

    // }])
    // .controller('NewsCtrl', ['$scope', '$http', function($scope, $http) {

    //     $scope.myInterval = 2000;
    //     $scope.noWrapSlides = false;
    //     $scope.active = 0;
    //     $http({
    //         url: 'http://ufc-data-api.ufc.com/api/v1/us/news',
    //     }).then(function sucess(req) {
    //         $scope.news = req.data;
    //     }).catch(function error(err) {
    //         console.log(err)
    //     });
    // }])
    // .controller('EventsCtrl', ['$scope', '$http', function($scope, $http) {
    //     $http({
    //         url: 'http://ufc-data-api.ufc.com/api/v3/iphone/events'
    //     }).then(function success(req) {
    //         $scope.events = req.data


    //     }).catch(function error(err) {
    //         console.log(err);
    //     })

    }])