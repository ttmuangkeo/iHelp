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
    }])