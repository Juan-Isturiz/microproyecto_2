import { useState, useEffect, createContext } from 'react';
export const AppContext = createContext(null)
export default function ContextProvider({children}){
    const [user, setUser] = useState(null);
    const [movieId, setMovieId] =useState(null);
    return (
        <AppContext.Provider
          value={{
            user,
            setUser,
            movieId,
            setMovieId
            
          }}
        >
          {children}
        </AppContext.Provider>
      );
}