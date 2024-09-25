/*
00,01,...,10,99
* */
let output = "";

for(let i=0;i<=99;i++){
    if(i<=9){
        output = output + `0${i},`;
       // console.log(`0${i},`)
    }else if(i<99){
        output = output + `${i},`;
       // console.log(`${i},`);
    }else
    if(i == 99){
        output = output + `${i}`;
    }
}
console.log(output)