const name1 = document.getElementById('name');
const email = document.getElementById('email');
const btn = document.getElementById('btn');

function emailCheck(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (pattern.test(email)) {
        return "Email to'g'ri";
		
    } else {
        return "Email noto'g'ri";
    }
}
function nameCheck(name){
	if(name.length>=3){
		return "Ism to'g'ri";
	} else {
        return "Ism noto'g'ri";
    }
}
btn.addEventListener('click', function() {
	alert(nameCheck(name1.value))
    alert(emailCheck(email.value)); 
});



