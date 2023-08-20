import React, { createContext, useContext, useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, browserLocalPersistence, setPersistence } from 'firebase/auth';
import '../firebaseConfig'
import { getTaskList } from '../apiCalls';
import { useDispatch } from 'react-redux';
import { setState, setEvents } from '../reducer/toDosReducer';

const Auth = createContext();
export const useAuth = () => useContext(Auth);

function AuthContext({children}) {

    const [ currentUser, setCurrentUser ] = useState(null);
    const [ pending, setPending ] = useState(true);
    const [ userId, setUserId ] = useState(null);

    const dispatch = useDispatch();

    let auth = getAuth();

    useEffect(() => {
        
        
        let unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user){
            setCurrentUser(user);
            setPersistence(auth, browserLocalPersistence);
            setUserId(user.uid)
            window.localStorage.setItem('userId', user.uid)
            const array = await getTaskList(user.uid);
            let events; 
            if (array.length){
             events = array.map((toDo) => ({
                title: toDo.task,
                start: toDo.date,
                description: toDo.complete
                }))
                console.log(events)
                dispatch(setEvents(events));
            }
            dispatch(setState(array));
        }
        });

        return unsubscribe;

    }, [pending]);

    useEffect(() => {
        
        let getUserId = async () => {
            const id = window.localStorage.getItem('userId');
            
            if (id) {
                setUserId(id);
                const array = await getTaskList(id);
                dispatch(setState(array));
            }
        }

        return getUserId;

    }, [])

  return (
    <Auth.Provider value={{ currentUser, setCurrentUser, setPending, userId }}>
        {children}
    </Auth.Provider>
  )
}

export default AuthContext