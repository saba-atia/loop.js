let x=[1,2,3,4,5];
let numfind=3;
let found=false;
for(let i=0;i<x.length;i++){
    if(x[i]===numfind){
        found=true;
        break;
    }
}
document .writeln(found)