function inputvalue(){
    return document.getElementById("inputval").innerText;
}
// console.log(inputvalue())

const changevalue=(num)=>{
    return document.getElementById("inputval").innerHTML=num;
}
// changevalue("888");

const outputvalue=()=>{
    return document.getElementById("outputval").innerText;
}

const outchangevalue=(num)=>{
    if(num==""){
        return document.getElementById("outputval").innerHTML=num;
    }
    else{
        return document.getElementById("outputval").innerHTML=num;
    }
}
// outchangevalue("");

var operator=document.getElementsByClassName("operator");
for (var index = 0; index < operator.length; index++) {
    operator[index].addEventListener('click',function(){
        if(this.id=="c"){
            changevalue("");
            outchangevalue("");
        }
        else if(this.id=="ce"){
            var out=outputvalue().toString();
            output=out.slice(0,-1);
            outchangevalue(output);
        }
        else{
            var out=outputvalue();
            var history=inputvalue();
            if(out!=""){
                history=history+out;
                if(this.id=="="){
                    var res=eval(history);
                    outchangevalue(res);
                    changevalue("");
                }
                else{
                    history=history+this.id;
                    changevalue(history);
                    outchangevalue("");
                }
            }
        }
    })
}
var number=document.getElementsByClassName("number");
for (var index = 0; index < number.length; index++) {
    number[index].addEventListener('click',function(){
        var out=outputvalue();
        if(out!=NaN){
            out=out+this.id;
            outchangevalue(out);
        }
    })
}


