const base_api='http://localhost:2707/loginUser';

const form=document.querySelector('#login-form');
form.addEventListener('submit',onLogin);
async function onLogin(event)
{
    event.preventDefault();
    const url=new URL(base_api);
    const body=new FormData(event.target);
    const value=Object.fromEntries(body.entries());
    value["password"]=document.getElementById('user-password-login').value;
    const header=new Headers();
    header.append('Content-Type','application/json');
    const json=JSON.stringify(value);
    console.log(json);

    const options={
        method:'POST',
        body: json,
        headers:header
    };

    try{
        const response =await  fetch(url,options);
        const temp= await response.json();
        if(temp.response_status==="SUCCESS"){
            alert("LOGIN SUCCESS");
            location.replace("http://127.0.0.1:5501/homePage.html");}
            else{
                alert("Authentication Failed,Use Correct email and password");
    
            }
    
    }
    catch(error)
    {
        console.error("Oops: "+error);
    }

}