function datefunction(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    document.getElementById('printDate').innerHTML = day +"/"+ month +"/"+ year;
}
function timefunction(){
    var date = new Date();
    var hour = date.getHours();
    var minit = date.getMinutes();
    var second = date.getSeconds();
    document.getElementById('printTime').innerHTML = hour +":"+ minit +":"+ second;
    // setInterval(function(){timefunction()},1000);
    setTimeout(function(){timefunction()},1000);

}


// var myPromise = new Promise(function(a,b){
//     var x = 0;
//     if( x == 1){
//         a("ok")

//     }
//     else{
//         b("error")
//     }
// })

// myPromise.then(
//     function(value){
//         console.log(value);
//     },
//     function(error){
//         console.log(error)
//     }
// )


