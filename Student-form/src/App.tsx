
import Studentform from './components/Studentform'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'


export default function App() {
    const [isoffline,setIsOffline] =useState(false)
    const [theme,setTheme]= useState(localStorage.getItem('theme')|| 'light');

    useEffect(()=> {
      console.log("useeffect ius ruunug");
      localStorage.setItem('theme', theme);
    }, [theme])

    const toggle =()=>{
      setTheme(theme => (theme==='light')? 'dark'  : 'light');
      
    }
    if(isoffline){
      return(
        <>
        <Navbar theme={theme} toggle={toggle}/>
          <h1>you are offline🙄</h1>
        </>
      )
    }else{

    }
  return (
  <>
    <div className="w-full" style={{backgroundColor: theme==='light' ? "white" : "black"}}>
    <Navbar theme={theme} toggle={toggle}/>
    <div className='pt-14'>
      <Studentform/> 
    </div>
    </div>    
    </>
  )
}
