function showtime(){
    var date=new Date();
    return date.getHours+" "+date.getMinutes+" "+date.getSeconds;
}

function showSessionExpire(){
    console.log("activty b:session expired at"+showtime());

}
console.log("act a triggering act b at"+showtime());
setTimeout(showSessionExpire,5000);
console.log("act a finished,b will end in  5 sec");