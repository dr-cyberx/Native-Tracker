import React, {createContext} from 'react'
import TrackCreateScreen from '../Screens/TrackCreateScreen';

const TrackContext = createContext();


export const TrackProvider = ({children}) => {
  return (
    <TrackContext.Provider value={{}}>
    {children}
    </TrackContext.Provider>
  )
}

export default TrackContext;