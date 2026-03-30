import React from 'react'
import Navbar from './NavBar/Navbar';
import Dropdown, { DropdownContent } from './Dropdown/Dropdown';
import { CodeButton } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRightOnRectangleIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Hero from './Hero/Hero';

const Accueil = () => {

  // Tu dois creer un tableau pour les elements du dropDown comme ceci
  const DropItems = [
    "Patients / Particuliers",
    "Professionnels de santé",
    "Entreprises",
    "Pharmacies",
    "Hôpitaux",
    "IA et automatisation"
  ]

  const DropItemsLang = [
    "Francais",
    "Anglais",
    "Allemand",
    "Espagnol",
    "Portugais",
    "Lingala"
  ]


  // tableau a passer pour remplir la navbar
  const navbarItems = [
    {
      label: "Solution",
      link: "/solution"
    },
    {
      label: (
        <Dropdown to="#"
          dropContent={
            <DropdownContent
              items={DropItems}
            />
          }
        >
          Services
        </Dropdown>
      )
    },
    {
      label: (
        <Dropdown
          dropContent={
            <DropdownContent
              items={DropItems}
            />
          }
        >
          {/* Tu vas trouver le mot approprie a mettre */}
          Fonctionnement
        </Dropdown >
      )
    },
    {
      label: (
        <Dropdown to="#"
          dropContent={
            <DropdownContent
              items={DropItemsLang}
            />
          }
        >
          {/* Tu vas trouver le mot approprie a mettre */}
          <GlobeAltIcon className="h-5 w-5" />
        </Dropdown>
      )
    },
    {
      label: (
        <Link to="/login">
          <CodeButton
            text="Se connecter"
            icone={<ArrowRightOnRectangleIcon className="w-5 h-5" />}
          />
        </Link>
      )
    }
  ]
  return (
    <div>
      <Navbar items={navbarItems} />
      <Hero />
    </div>
  )
}

export default Accueil
