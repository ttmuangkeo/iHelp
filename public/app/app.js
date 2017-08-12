var app = angular.module('App', ['ui.router', 'ui.bootstrap', 'myCtrls']);


app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.html',
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'app/views/profile.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.html'
        })
        .state('feed', {
            url: '/feed',
            templateUrl: 'app/views/feed.html',
            controller: 'feedCtrl'
        })
        .state('learnmore', {
            url: '/learnmore',
            templateUrl: 'app/views/learnmore.html',
            controller: 'feedCtrl'
        })
        .state('response', {
            url: '/response',
            templateUrl: 'app/views/response.html'
        })
        .state('confirm', {
            url: "/confirm",
            templateUrl: 'app/views/confirm.html'
        })
        .state('request', {
            url: '/request',
            templateUrl: 'app/views/request.html'
        })
        .state('alyson', {
            url: '/profile1',
            templateUrl: 'app/views/profile1.html'
        })
        .state('josh', {
            url: '/profile2',
            templateUrl: 'app/views/profile2.html'
        })
        .state('jing', {
            url: '/profile3',
            templateUrl: 'app/views/profile3.html'
        })



    $locationProvider.html5Mode(true);
}]);