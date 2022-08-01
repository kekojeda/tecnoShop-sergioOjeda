import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFbUBTgjsY94P4osipbHmxrsVzdLqdIHQ",
  authDomain: "tecnoshop-c8260.firebaseapp.com",
  projectId: "tecnoshop-c8260",
  storageBucket: "tecnoshop-c8260.appspot.com",
  messagingSenderId: "330061114076",
  appId: "1:330061114076:web:8f3157e6275ffbb5a5a219",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export const getAllProducts = async () => {
  const itemCollection = collection(db, "productos")
  const q = query(itemCollection)
  return await getDocs(q)
}

export const getProductsByCategoryId = async (categoryId) => {
  const itemCollection = collection(db, "productos")
  const q = query(itemCollection, where("categoryId", "==", categoryId))
  return await getDocs(q)
}

export const getProducts = async (categoryId) => {
  if (categoryId) {
    getProductsByCategoryId(categoryId)
  }else {
    return await getAllProducts();
  }
}

export const getProductsById = async (productId) => {
  return (await getDoc(doc(db, "productos", productId))).data();
}




// de aca para abajo test


// const docRef = doc(db, "productos", "686SzTz75jMkZBZ6byMM")

/*getDoc(docRef).then((snapshot) => {
    console.log({id: snapshot.id, ...snapshot.data()})
})


cod helper
.then((snapshot) => {
        return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    
  });


*/
/*
const colRef = collection(db, "productos");
getDocs(colRef).then((snapshot) => {
  console.log(
    snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  );
});

//Creacion de query para filtrar
const q = query(colRef, where("price", "<", 125));

getDocs(q).then((snapshot) => {
  console.log(
    snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  );
});
*/