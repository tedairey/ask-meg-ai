import React, {createContext} from 'react';
import Fire from '../config/Fire';

export const FireContext = createContext(null); 
export const FirebaseProvider = (props) => ( 
   <FireContext.Provider value={Fire}> 
      {props.children} 
   </FireContext.Provider> 
);