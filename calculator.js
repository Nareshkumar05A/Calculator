function append(value)
{
    console.log(value)
    document.getElementById('input').value+=value;
    console.log( document.getElementById('input').value)
}
function display(){
    document.getElementById('input').value='';
}
function calculate()
{
    try{
        document.getElementById('input').value=eval(document.getElementById('input').value)
        console.log( document.getElementById('input').value)
    }
    catch{
        document.getElementById('input').value='Error'
    }
}
function deleteLast()
{
   
        let inputField = document.querySelector('#input');
        console.log('hi') 
        inputField.value = inputField.value.slice(0,inputField.value.length-1);
       
}