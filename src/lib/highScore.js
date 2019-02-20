import firebase from 'firebase';
import 'firebase/firestore';

const config = {
        apiKey: "AIzaSyCC-bfVQAzFFz3D20Wdv-IlnHfL4xrojHc",
        authDomain: "whenpigsfly-b4ec5.firebaseapp.com",
        databaseURL: "https://whenpigsfly-b4ec5.firebaseio.com",
        projectId: "whenpigsfly-b4ec5",
        storageBucket: "whenpigsfly-b4ec5.appspot.com",
        messagingSenderId: "395187556446"
    };

const fb = firebase.initializeApp(config);
const highScores = fb.firestore().collection("highScores");

export const postScore = (name, points) => {
    highScores.add({
        name,
        points
    });
};

export const fetchHighScores = () => {
    return highScores.orderBy("points", "desc").limit(10).get();
}