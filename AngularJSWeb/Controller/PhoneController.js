
///<reference path="/Library/angular.js"/>
angular.module("phonecat", ['ngRoute', "phonecatFilters"]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/phones', { templateUrl: "partials/phone-list.html", controller: PhoneListCtrl })
    .when('/phones/:phoneId', { templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl })
    .otherwise({ redirectTo: '/phones' });
}]);
//angular.module('phonecat', ['phonecatFilters']);
angular.module('phonecatFilters', []).filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});



function PhoneListCtrl($scope) {
    $scope.phones = [
      {
          "id": "1",
          "name": "Nexus S",
          "snippet": "Fast just got faster with Nexus S."
      },
      {
          "id": "2",
          "name": "Motorola XOOM™ with Wi-Fi",
          "snippet": "The Next, Next Generation tablet."
      },
      {
          "id": "3",
          "name": "MOTOROLA XOOM™",
          "snippet": "The Next, Next Generation tablet."
      }
    ];
}

function PhoneDetailCtrl($scope, $routeParams, $http) {
    var d;
    $http.get('data/phone.txt').success(function (data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}