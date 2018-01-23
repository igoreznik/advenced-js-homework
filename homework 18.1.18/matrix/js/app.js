/**
 * Created by igor.reznik on 21/01/2018.
 */
var Direction;
(function (Direction) {
    Direction[Direction["main"] = 0] = "main";
    Direction[Direction["sub"] = 1] = "sub";
    Direction[Direction["up"] = 2] = "up";
    Direction[Direction["down"] = 3] = "down";
    Direction[Direction["center"] = 4] = "center";
})(Direction || (Direction = {}));
var mat;
mat = new Array(3);
for (var i = 0; i < mat.length; i++) {
    mat[i] = new Array(3);
}
for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[i].length; j++) {
        if (i == j) {
            mat[i][j] = Direction[0];
        }
        // mat[i][j] = 0;
        if ((i + j) == (mat[i].length - 1)) {
            mat[i][j] = Direction[1];
        }
        if (i > j) {
            mat[i][j] = Direction[3];
        }
        if (i < j) {
            mat[i][j] = Direction[2];
        }
        if (i == 1 && j == 1) {
            mat[i][j] = Direction[4];
        }
    }
}
console.log(mat);
