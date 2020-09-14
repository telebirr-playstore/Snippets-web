// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_update_document_nested]
import { doc, collection, setDoc, updateDoc } from "firebase/firestore"; 

// Create an initial document to update.
const frankDocRef = doc(collection(db, "users"), "frank");
await setDoc(frankDocRef, {
    name: "Frank",
    favorites: { food: "Pizza", color: "Blue", subject: "recess" },
    age: 12
});

// To update age and favorite color:
await updateDoc(frankDocRef, {
    "age": 13,
    "favorites.color": "Red"
});
// [END modular_update_document_nested]