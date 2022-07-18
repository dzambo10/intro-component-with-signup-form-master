
let inputs = document.querySelectorAll('input');
let first_name = document.querySelector('#fname')
let errors = {
	'fname': [],
	'lname': [],
	'email': [],
	'pwd': [],
};

inputs.forEach((element) => {
	element.addEventListener('change', e =>{
		let currentInput = e.target
		let inputValue = currentInput.value;
		let inputName = currentInput.getAttribute('name')
		

		

			errors[inputName] = [];

			switch(inputName){
				case 'fname':
				if(!inputValue.length > 0) {
					errors[inputName].push('First Name cannot be empty')
					first_name.style.border = '1px solid red'
				} else {
					first_name.style.border = '1px solid rgb(210, 210, 210)'
				}
				break;
				case 'lname':
				if(!inputValue.length > 0) {
					errors[inputName].push('Last Name cannot be empty')
				}
				break;
				case 'email':
				if(validateEmail(inputValue)) {
					console.log('dobro je');
				} else {
					errors[inputName].push('Looks like this is not an email')
				}
				break;
				case 'pwd': 
				if(!inputValue.length > 0) {
					errors[inputName].push('Password cannot be empty')
				}
			}
		

		populateErrors();
	});	
});

const populateErrors = () => {

	for(let elem of document.querySelectorAll('ul')) {
		elem.remove()
	}
	
	for(let key of Object.keys(errors)) {
		let input = document.querySelector(`input[name="${key}"]`)
		let parentElement = input.parentElement;
		let errorsElement = document.createElement('ul')
		parentElement.appendChild(errorsElement)

		errors[key].forEach(error =>{
			let li = document.createElement('li');
			li.innerText = error;

			errorsElement.appendChild(li);
		})
	}
}

const validateEmail = email => {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return (true)
	}
		return(false)
}