import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appp from './wishlist'
import WishlistContainer from './WishlistContainer'
import WishlistForm from './WishlistForm'
import WishlistItem from './WishlistItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Appp/>
     <WishlistContainer/>
   
    </>
  )
}

export default App
