
const logIn=document.getElementById('logIn')
const logs=[]



const inicioSesion= ()=>{
    const usernameValue=document.getElementById('Username').value
    const passwordValue=document.getElementById('Password').value
    const usernameCorrecto= 'EstebanSanchez'
    const passwordCorrecto='12345'

    if(usernameValue==usernameCorrecto && passwordValue==passwordCorrecto){
        window.location='../Principle-Page/index.html'
        alert('Correcto') 
    }else{
        alert('Incorrecto')
    }
}
