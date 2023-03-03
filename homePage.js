const element=document.getElementById("manaliButton");
element.addEventListener('submit',bookTicket());
console.log(element);

function bookTicket(event)
{     
    event.preventDefault();
    console.log("Clicked");
    // onclick=location.href='login.html';
}