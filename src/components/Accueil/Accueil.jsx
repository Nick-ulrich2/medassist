import React from 'react'
import Main from './Main/Main'
import Navbar from './NavBar/Navbar'
import Dropdown from './Dropdown/Dropdown'
import { CodeButton } from '../ui/Button'

const Accueil = () => {
  return (
    <div>
      <Navbar 
        element1="Accueil"
        element2={
          <Dropdown 
            el1="Teleconsultation"
            el2="Soins à domicile" 
            el3="Pharmacie Express"
            el4="Diagnostic IA"
            el5="Services"          
          />
        }
        element3={
          <Dropdown 
            el1="Teleconsultation"
            el2="Soins à domicile" 
            el3="Pharmacie Express"
            el4="Diagnostic IA"
            el5="Avantages"          
          />
        }
        element4="langues"
        element5={<CodeButton text="Se connecter"/>}
      />
    </div>
  )
}

export default Accueil
