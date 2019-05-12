function hesabla(){
 var n=(prompt("Tarixi daxil edin"))

 var date=new Date();
 var any=new Date(n);
 

var diff=date.getTime()-any.getTime(n);

if(diff<3600000){
    console.log((diff/1000/60),"deqiqe once")


}else if(diff<3600000*24){
    console.log((diff/1000/60/60),"saat once")
}else if(diff<3600000*24*3){
    console.log((diff/1000/60/60/24),"gun once")
}else if(diff<3600000*24*7){
    console.log((diff/1000/60/60/24/7),"hefte once")
} else if(diff>3600000*24*7){
    console.log(n);
}
}
hesabla();
    


