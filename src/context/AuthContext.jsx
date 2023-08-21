import React, { createContext, useContext, useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, browserLocalPersistence, setPersistence } from 'firebase/auth';
import '../firebaseConfig'
import { getTaskList } from '../apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { setState, setEvents } from '../reducer/toDosReducer';

const Auth = createContext();
export const useAuth = () => useContext(Auth);

function AuthContext({children}) {

    const [ currentUser, setCurrentUser ] = useState(null);
    const [ pending, setPending ] = useState(true);
    const [ userId, setUserId ] = useState(null);

    const dispatch = useDispatch();
    const toDos = useSelector(state => state.toDos.toDos)

    let auth = getAuth();

    const fetchAPI = async (id) => {
        const array = await getTaskList(id);
        console.log(array)
        let events; 
        if (array.length){
         events = array.map((toDo) => ({
            id: toDo.id,
            title: toDo.task,
            start: toDo.date,
            description: toDo.complete
            }))
            dispatch(setEvents(events));
        }
        dispatch(setState(array));
    }

    useEffect(() => {
        
        
        let unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user){
            setCurrentUser(user);
            setPersistence(auth, browserLocalPersistence);
            setUserId(user.uid)
            window.localStorage.setItem('userId', user.uid)
            fetchAPI(user.uid)
            // const array = await getTaskList(user.uid);
            // console.log(array)
            // let events; 
            // if (array.length){
            //  events = array.map((toDo) => ({
            //     id: toDo.id,
            //     title: toDo.task,
            //     start: toDo.date,
            //     description: toDo.complete
            //     }))
            //     dispatch(setEvents(events));
            // }
            // dispatch(setState(array));
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


    useEffect(() => {


        let events = toDos.map((toDo) => ({
            id: toDo.id,
            title: toDo.task,
            start: toDo.date,
            description: toDo.complete
            }))
        dispatch(setEvents(events));


    }, [toDos])

  return (
    <Auth.Provider value={{ currentUser, setCurrentUser, setPending, userId }}>
        {children}
    </Auth.Provider>
  )
}

export default AuthContext