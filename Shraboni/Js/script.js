var addToCard = [];

function add_to_card(a,b){
    var x = document.getElementById(a).innerHTML;
    addToCard.push({"price":x, "name":b})
    console.log('Price is '+addToCard[0].name);
         console.log(addToCard);
}
function myFunction() {
    var x = document.getElementById("MyCard");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("MyItemList");
  var i ;
  var arrlen = addToCard.length - 1;
  var total = 0;
  y.innerHTML=""
  for ( i = 0; i<= arrlen; i++){
      var company = "My Dream company"
      var price = addToCard[i].price;
      var name = addToCard[i].name
      total+=parseInt(price)
      y.innerHTML += "<tr>"+
                    "<th scope='row'>"+i+"</th>"+
                    "<td>"+name+"</td>"+
                    "<td>"+company+"</td>"+
                    "<td>"+price+"</td>"+
                  "</tr>"; 
}
y.innerHTML += "<tr>"+
                    "<th scope='row'> </th>"+
                    "<td>Total</td>"+
                    "<td>...............</td>"+
                    "<td>"+total +"</td>"+
                  "</tr>"; 
  }