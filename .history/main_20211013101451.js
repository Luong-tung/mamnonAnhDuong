
var counter = 1;
setInterval( () =>{
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter >4) {

        counter =1;
    }
},5000);
var counte = 1;
setInterval( () =>{
    document.getElementById('radi' + counte).checked = true;
    counte++;
    if (counte >4) {

        counte =1;
    }
},5000)
$(document).ready( () =>{
    $('list').click( () =>{
        const value = $(this).attr('data-filter');
        if (value == 'All'){
            $('.itemBox').show('1000');
        }
        else{
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');



        }
    })
})