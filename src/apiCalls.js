import { firestore } from './firebaseConfig';
import { collection, getDoc, doc } from '@firebase/firestore';

const tasksRef = collection(firestore, 'tasksManager')

export const getTaskList = async () => {
    const docRef = doc(tasksRef, 'tasks')
    const dataDoc = await getDoc(docRef)
    const array = dataDoc.data().toDos
    return array
}