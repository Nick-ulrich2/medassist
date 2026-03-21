import React from 'react'
import Main from './Main/Main'
import Navbar from './NavBar/Navbar';
import Dropdown, { DropdownContent } from './Dropdown/Dropdown';
import { CodeButton } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRightOnRectangleIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Accueil = () => {
  return (
    <div>
      <Navbar
        // Je propose solution car c'est plus evocateur pour le texte qui sera dans la partie hero
        element1="Solution"
        element2={
          <Dropdown to="#"
            dropContent={
              <DropdownContent
                el1="c'est"
                el2='toi'
                el3='qui'
                el4='va'
                el5='remplir'
                el6='ca'
                el7='tu devais lire'
              />
            }
          >
            Services
          </Dropdown>
        }
        element3={
          <Dropdown
            dropContent={
              <DropdownContent el1='tu vas trouver quoi mettre ici' />
            }
          >
            {/* Tu vas trouver le mot approprie a mettre */}
            Fonctionnement
          </Dropdown>
        }
        element4={
          <Dropdown
            dropContent={
              <DropdownContent el1='Francais' el2='English' el3='Deutsh' el4='Portugal' el5='Autres' />
            }
          >
            {/* Tu vas trouver le mot approprie a mettre */}
            <GlobeAltIcon className="h-5 w-5" />
          </Dropdown>
        }
        element5={
          <Link to="/login">
            <CodeButton
              text="Se connecter"
              icone={<ArrowRightOnRectangleIcon className="w-5 h-5" />}
            />
          </Link>
        }
      />
    </div>
  )
}

export default Accueil
