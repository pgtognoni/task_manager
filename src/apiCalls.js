import { firestore } from './firebaseConfig';
import { collection, getDoc, doc, setDoc, addDoc } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import './firebaseConfig';

const tasksRef = collection(firestore, 'taskmanager')

export const getTaskList = async (userId) => {
    const usersRef = collection(firestore, 'users');
    const userDocRef = doc(usersRef, userId);
    const user = await getDoc(userDocRef)
    const array = user.data().toDos
    return array
}

export const createUser = async (userId, userData) => {
    const userDocRef = doc(firestore, 'users', userId);
  
    try {
      await setDoc(userDocRef, userData);
      console.log('User document created successfully');
    } catch (error) {
      console.error('Error creating user document:', error);
    }
  };