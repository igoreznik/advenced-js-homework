/**
 * Created by igor.reznik on 21/01/2018.
 */
enum Direction {
    main,
    sub,
    up,
    down,
    center
}
let mat: string[][];
mat = new Array<Array<string>>(3);
for(let i:number = 0; i < mat.length; i++) {
    mat[i] = new Array<string>(3);
}
for(let i:number = 0; i < mat.length; i++) {
    for(let j:number = 0; j < mat[i].length; j++) {
        if(i == j){
            mat[i][j] = Direction[0];
        }
        // mat[i][j] = 0;
        if((i+j) == (mat[i].length -1)) {
            mat[i][j] = Direction[1];
        }
        if(i > j){
            mat[i][j] = Direction[3];
        }
        if(i < j){
            mat[i][j] = Direction[2];
        }
        if(i == 1 && j==1) {
            mat[i][j] = Direction[4];
        }
    }

}


console.log(mat);
