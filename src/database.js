$(function(){
  var config = {
          apiKey: "AIzaSyCMHH6S7ZmdQK8xGlkDxLdH4wYj6PaKN2g",
          authDomain: "raghuveer-website.firebaseapp.com",
          databaseURL: "https://raghuveer-website.firebaseio.com",
          projectId: "raghuveer-website",
          storageBucket: "",
          messagingSenderId: "319737998202"
        };

  firebase.initializeApp(config);
  const preObject = document.getElementById("preObject");

  var db = firebase.firestore();
  var x = 5;

  db.collection("contacts").add({
    email: emails,
    subject: subject,
    description: desc
  })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  
});
