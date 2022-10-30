var a;
a = 0;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 89] = "Blue";
})(Color || (Color = {}));
;
var my_color;
my_color = Color.Blue;
console.log("color is ".concat(my_color, ", num is ").concat(a));
