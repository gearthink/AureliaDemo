export class Welcome {
    heading = 'Welcome to the Aurelia Navigation App!';
    firstName = 'Travis';
    lastName = 'Matthews';

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    welcome(){
        alert(`Welcome, ${this.fullName}!`);
    }
}