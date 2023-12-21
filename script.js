fetch('https://jsonplaceholder.typicode.com/users')

.then(res =>{
    if(!res.ok){
        console.log('problem');
        return;
    }
    return res.json();
})

.then(data => {
    for(i = 0; i < data.length; i++){

        // 
        
        document.querySelector('ul').
        insertAdjacentHTML("beforeend", `<li>${data[i].name}</li>`)
    }
})
