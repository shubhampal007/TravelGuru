const base_api='http://localhost:2707/registerUser';

const form=document.querySelector('#final-s');
console.log(form);
// console.log(document.querySelector('form'));
form.addEventListener('submit',onSubmit);

async function onSubmit(event){
  event.preventDefault();
const url=new URL(base_api);
// async function main(){
//   const body={
//     name:'shubham'};
const body=new FormData(event.target);
const value = Object.fromEntries(body.entries());
value["password"]=document.getElementById('password').value;

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
        alert("Registered Successfully,Login to Continue");
        location.replace("http://127.0.0.1:5501/login.html");}
        else{
            alert("Please Login,User Already Registered");

        }

}
catch(error)
{
    console.error("Oops: "+error);
}

}


