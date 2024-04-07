//use of usecontext hook and context api

//create a context (warehouse)
//Provider
//consumer/usecontext
import React,{useContext, useReducer} from 'react'
import reducer from "./reducer";

const AppContext = React.createContext();

const intialState ={
    name:"",
    image:"",
};

const updateHomePage = () =>{
    return dispatch(
        {
           type:"HOME_UPDATE", 
           payload:{
            name:"WeLCOME TO SITE",
            image:"./images/hero.svg",
           },
        }
    )
}

const updateAboutPage=()=>{
    return dispatch(
        {
           type:"ABOUT_UPDATE", 
           payload:{
            name:"Pratima Jaiswal",
            image:"./images/about1.svg"
           },
        }
    )
}

const AppProvider = ({children})=>{
    
    const [state,dispatch] = useReducer(reducer,intialState)
    
    return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
        {children}
    </AppContext.Provider>
};

//Global custom hook
const useGlobalContext = () =>{
    return useContext(AppContext)
}

export default{AppContext,AppProvider,useGlobalContext};