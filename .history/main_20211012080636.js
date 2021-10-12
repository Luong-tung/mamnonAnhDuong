
var counter = 1;
setInterval( () =>{
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter >4) {

        counter =1;
    }
},5000)
var counter2 = 1;
setInterval( () =>{
    document.getElementById('radi' + counter2).checked = true;
    counter2++;
    if (counter2 >6) {

        counter2 =1;
    }
},5000)