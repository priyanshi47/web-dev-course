let content = document.querySelector('#val');
      
let  incr = () =>
{
    let ans1 = parseInt(content.textContent);
    content.textContent = ans1 + 1;   
}

let  decr = () =>
{
 
 let ans1 = parseInt(content.textContent);
 content.textContent = ans1-1;   
}
