var MainController = function($scope){


    var obj = {hello:null, cels:null, hello2:null, fehr:null}

    function roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2");
    }

    var incrementLikes = function(likes){


        obj.hello = roundToTwo(($scope.likes-32)*(5/9));
        obj.cels = "Degrees Celsius";

    };

    var toFehr = function(number2)
    {
        obj.hello2 = roundToTwo(($scope.number2*(9/5)+32));
        obj.fehr = "Degrees Fahrenheit"
    }

    $scope.toFehr = toFehr;
    $scope.incrementLikes = incrementLikes;
    $scope.obj = obj;
  
};
