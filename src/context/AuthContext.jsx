import React, { createContext, useContext, useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, browserLocalPersistence, setPersistence } from 'firebase/auth';
import '../firebaseConfig'
import { getTaskList } from '../apiCalls';
import { useDispatch } from 'react-redux';
import { setState } from '../reducer/toDosReducer';

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
            setCurrentUser(user);
            setPersistence(auth, browserLocalPersistence);
            setUserId(user.uid)
            window.localStorage.setItem('userId', user.uid)
            const array = await getTaskList(user.uid);
            dispatch(setState(array));
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