BackButtonDirective.$inject = ['$window'];
function BackButtonDirective($window) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind('click', function () {
        $window.history.back();
      });
    }
  };
}

app.directive("backButton", BackButtonDirective);
