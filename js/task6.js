let x=[1,2,3,4,5];
let larg=x[0];
for (let i=1;i<x .length;i++){
    if (x[i]>larg){
        larg=x[i]
    }
}
document .write(larg);