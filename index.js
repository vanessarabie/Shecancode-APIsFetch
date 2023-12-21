//callbacks {POST}

const newUser = {
    name: 'Maria',
    job: 'Teacher'
};

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },body: JSON.stringify(newUser) 
})
  .then(res => res.json())
  .then(data =>{
    console.log(data);
  }).catch(error => {
    console.log(error);
  });


