let x=[5,4,3,2,1];
let small=x[0];
for (i=1;i<x.length;i++){
    if(x[i]<small){
        small=x[i]
    }
}
document .write(small)