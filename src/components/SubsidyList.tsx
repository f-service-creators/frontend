import { useCollectionData } from "react-firebase-hooks/firestore"
import firebase from "firebase"
import React from "react"

const firebaseConfig = {
    projectId: import.meta.env.VITE_PROJECT_ID,
    appId: import.meta.env.VITE_APP_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    locationId: import.meta.env.VITE_LOCATION_ID,
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}
const Subsidies = () => {
    console.log("Start connect to firestore")
    console.log(import.meta.env.VITE_MEASUREMENT_ID)
    const [values, loading, error] = useCollectionData(
        firebase.firestore().collection("subsidy"),
        {
            idField: "id",
        }
    )
    console.log("Proccessing connect to firestore")
    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{`Error: ${error.message}`}</div>
    }
    console.log(values)
    if (typeof values === "undefined") {
        return <div>No Data</div>
    }
    const listItems = values.map((value) => (
        <li key={value.id}>{value.title}</li>
    ))
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default Subsidies
