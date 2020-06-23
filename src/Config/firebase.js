import app from 'firebase/app';

//web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDgFqP15BC-iFG78l3yB9F8uWObhDhFcS8",
    authDomain: "agriplan-c514b.firebaseapp.com",
    databaseURL: "https://agriplan-c514b.firebaseio.com",
    projectId: "agriplan-c514b",
    storageBucket: "agriplan-c514b.appspot.com",
    messagingSenderId: "268184532486",
    appId: "1:268184532486:web:d644075424a1357a37f587"
  };


class Firebase {
    constructor() {
        app.initializeApp(config)
    }
}

export default Firebase