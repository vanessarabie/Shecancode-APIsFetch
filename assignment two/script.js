// function submitForm() {
//     const myForm = document.getElementById('.form');

//     const formData = new FormData(myForm);

//     const name = formData.get('name');
//     const age = formData.get('age');
//     const location = formData.get('location');

//     console.log('Name:', name);
//     console.log('Age:', age);
//     console.log('Location:', location);
// }

const formE = document.getElementById('.form');


formE.addEventListener('submit', event => {
    event.preventDefault();
       
    const formData = new FormData(formE);
    const data = new URLSearchParams(formData);

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});