export default class HomeComponent {
    firstName;
    lastName;
    website;
    email;
    password;
    searchFor;

    save(myForm) {
        if(!myForm.$valid) {
            myForm.$setSubmitted();
            return;
        }
        alert('submitted');
    }

    validatePassword(e) {
        let x = e;
    }
}
