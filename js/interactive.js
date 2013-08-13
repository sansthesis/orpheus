'use strict';

// Declare app level module which depends on filters, and services
var interactive = angular.module('interactive', []);

interactive.controller('CategoryController', ['$scope', function($scope) {
    $scope.title = 'Title';
    $scope.keys = [];
    $scope.min = 0;
    $scope.max = 0;

    $scope.init = function(title, keys, min, max) {
        $scope.title = title;
        $scope.keys = keys;
        $scope.min = min;
        $scope.max = max;
    }
}]);

interactive.controller('GlobalController', ['$scope', function($scope) {
    $scope.natures = ['Caregiver', 'Defender', 'Gallant', 'Martyr', 'Mediator', 'Penitent', 'Dabbler', 'Explorer', 'Loner', 'Rebel', 'Socialite', 'Thrill-Seeker', 'Architect', 'Avant-Garde', 'Celebrant', 'Dreamer', 'Gambler', 'Visionary', 'Bravo', 'Bumpkin', 'Critic', 'Judge', 'Masochist', 'Perfectionist', 'Rogue', 'Autocrat', 'Bureaucrat', 'Competitor', 'Director', 'Leader', 'Mentor', 'Pedagogue', 'Traditionalist', 'Bon Vivant', 'Child', 'Conniver', 'Rake', 'Riddler', 'Trickster', 'Conformist', 'Curmudgeon', 'Fanatic', 'Follower', 'Scientist', 'Survivor', 'Addict', 'Barbarian', 'Deviant', 'Grotesque', 'Monster', 'Wretch'];
    $scope.shades = ['Banshee', 'Haunter', 'Poltergeist', 'Skinrider', 'Wisp'];
    $scope.laments = ['Skimmer', 'Sleeper', 'Spirit', 'Hue'];
    $scope.backgrounds = ['Arsenal', 'Detective License', 'Patron', 'Personal Trainer', 'Status', 'Allies', 'Artifact', 'Contacts', 'Destiny', 'Influence', 'Memorial', 'Mentor', 'Reincarnate', 'Resources'];
}]);

interactive.controller('MyCtrl', ['$scope', function($scope) {
    $scope.value = $scope.min;
    $scope.classForValue = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    $scope.class = $scope.classForValue[$scope.value];

    $scope.init = function(min, max) {
        $scope.min = min;
        $scope.max = max;
        $scope.value = min;
    }

    $scope.action = function() {
        $scope.value = ($scope.value + 1) % ($scope.max + 1);
        $scope.value = $scope.value < $scope.min ? $scope.min : $scope.value;
        $scope.class = $scope.classForValue[$scope.value];
    }
}]);
