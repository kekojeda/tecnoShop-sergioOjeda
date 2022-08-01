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
  const itemCollection = collection(db, "productos");
  const q = query(itemCollection);
  return await getDocs(q);
};

export const getProductsByCategoryId = async (categoryId) => {
  const itemCollection = collection(db, "productos");
  const q = query(itemCollection, where("categoryId", "==", categoryId));
  return await getDocs(q);
};

export const getProducts = async (categoryId) => {
  if (categoryId) {
    return await getProductsByCategoryId(categoryId);
  } else {
    return await getAllProducts();
  }
};

export const getProductsById = async (productId) => {
  return (await getDoc(doc(db, "productos", productId))).data();
};
