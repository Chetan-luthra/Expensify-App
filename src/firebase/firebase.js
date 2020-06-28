import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database() 

    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    export { firebase , googleAuthProvider, database as default}

    // database.ref('expenses').on('child_removed', (snapshot) => {
    //   console.log(snapshot.key, snapshot.val())
    // })
    // database.ref('expenses').on('child_changed', (snapshot) => {
    //   console.log(snapshot.key, snapshot.val())
    // })
    // database.ref('expenses').on('child_added', (snapshot) => {
    //   console.log(snapshot.key, snapshot.val())
    // })
  //   // database.ref('expenses')
  //   // .once('value')
  //   // .then((snapshot) => {
  //   //   const expenses = []

  //   //   snapshot.forEach((childSnapshot) => {
  //   //     expenses.push({
  //   //       id: childSnapshot.key,
  //   //       ...childSnapshot.val()
  //   //     })
  //   //   })
  //   //   console.log(expenses)
  //   // })

  //   // database.ref('expenses')
  //   // .on('value', (snapshot) => {
  //   //   const expenses = []

  //   //   snapshot.forEach((childSnapshot) => {
  //   //     expenses.push({
  //   //       id: childSnapshot.key,
  //   //       ...childSnapshot.val()
  //   //     })
  //   //   })
  //   //   console.log(expenses)
  //   // })
  //   // database.ref("expenses").push({
  //   //   description: "Water Bill",
  //   //   note: 'Fill it in a month',
  //   //   amount: 100.96,
  //   //   createdAt: 65000
  //   // })
  //   // database.ref("expenses").push({
  //   //   description: "Electricity Bill",
  //   //   note: 'Fill it in a month',
  //   //   amount: 150.86,
  //   //   createdAt: 155688895
  //   // })
  //   // database.ref("expenses").push({
  //   //   description: "Rent",
  //   //   note: '',
  //   //   amount: 1100.00,
  //   //   createdAt: 481565951744
  //   // })
  //   // database.ref('notes').push({
  //   //   title: 'Course Topic',
  //   //   body: 'React'
  //   // })
  // //   const notes = [{
  // //     id: '12',
  // //     title: 'First Note',
  // //     body: 'This is my note'
  // //   },
  // //   {
  // //     id: '761xyz',
  // //     title: 'Second Note',
  // //     body: 'This is my second note'
  // //   }
  // // ]
  // // database.ref('notes').set(notes)

  //   // const onValueChange = database.ref().on('value', (snapshot) => {
  //   //   const value = snapshot.val()
  //   //   console.log(`${value.name} is ${value.jobs.title} at ${value.jobs.company}`)
  //   // }, (e) => {
  //   //   console.log('Error with data fetching ', e)
  //   // })
  //   // setTimeout(() =>{
  //   //   database.ref('jobs/company').set("Google")
  //   // }, 5000)
  //   // setTimeout(() =>{
  //   //   // console.log(onValueChange)
  //   //   database.ref().off('value', onValueChange)
  //   // }, 10000)

  //   // setTimeout(() =>{
  //   //   database.ref('age').set(30)
  //   // }, 15000)
  //   // database.ref('location/city')
  //   // .once('value')
  //   // .then((snapshot) => {
  //   //   const val = snapshot.val()
  //   //   console.log(val)
  //   // })
  //   // .catch((e) => {
  //   //   console.log('Error in fetching the object ', e)
  //   // })
  //   // database.ref().set({
  //   //   name: 'Chetan Luthra',
  //   //   age: 26,
  //   //   job: 'Developer',
  //   //   stressLevel : 6,
  //   //   jobs: {
  //   //     title: "Software Developer",
  //   //     company: "Google"
  //   //   },
  //   //   location: {
  //   //       city: "Delhi",
  //   //       country: "India"
  //   //   }
  //   //   }).then(() => {onValueChange
  //   //     console.log('Data is saved')
  //   //   }).catch((e) => {
  //   //     console.log('data saved Failed. ', e)
  //   //   })
  //   // // database.ref('isSingle')
  //   // // .remove()
  //   // // .then(() => {
  //   // //   console.log("Ref Removed")
  //   // // }).catch((e) => {
  //   // //   console.log('Ref Removed failed. ', e)
  //   // // })
  //   // database.ref().update({
  //   //   stressLevel: 9,
  //   //   'location/city': 'Gurugram',
  //   //   'jobs/company': 'Amazon'
  //   // })