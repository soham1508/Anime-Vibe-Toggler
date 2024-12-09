import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
function App() {
 const [themeMode,setThemeMode] = useState("light")
 const lightTheme = () =>{
  setThemeMode("light")
 }
 const darkTheme = () =>{
  setThemeMode("dark")
 }
 const ui = document.querySelector('html').classList
 useEffect(() => {
  ui.remove("light","dark")
  ui.add(themeMode)
  if (themeMode === "light") {
    document.body.style.backgroundColor = "#ffffff"; // Light background
    image.src ="https://pbs.twimg.com/media/GLVd1A5agAARIPQ?format=jpg&name=900x900" 
} else if (themeMode === "dark") {
    document.body.style.backgroundColor = "#1a1a1a"; // Dark background
    image.src = "https://preview.redd.it/why-do-you-like-xiao-v0-ugg80eyol79c1.jpeg?auto=webp&s=d80e93231bd31a52b53bd35ace1312b3d4a4de08"
} 

 },[themeMode])

  return (
    <ThemeProvider value = {{themeMode,darkTheme,lightTheme}}>
     
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
 
    </ThemeProvider>
  )
}

export default App
