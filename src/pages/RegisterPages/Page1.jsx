import React from 'react'
import { Link } from "react-router-dom";
import AuthPage from '../AuthPage'
import { RegisterButton } from '../../components/ui/Button';
import {
    UserIcon,
    UserPlusIcon,
    BuildingOfficeIcon,
    BuildingOffice2Icon,
    BeakerIcon,
    AcademicCapIcon,
    ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Page1 = () => {

    const profiles = [
        {
            leftIcon: <UserIcon className='w-5 font-bold' />,
            title: "Patient",
            description: "Diabetique, Hypertendu, Fievreux, ...",
            rightIcon: <ArrowRightIcon className='w-4 font-bold' />
        },
        {
            leftIcon: <UserPlusIcon className='w-5 font-bold' />,
            title: "Praticien",
            description: "Specialiste, Medecin, Infirmier, ...",
            rightIcon: <ArrowRightIcon className='w-4 font-bold' />
        },
        {
            leftIcon: <BuildingOfficeIcon className='w-5 font-bold' />,
            title: "Entreprise",
            description: "Exemples a mettre ici, ...",
            rightIcon: <ArrowRightIcon className='w-4 font-bold' />
        },
        {
            leftIcon: <BuildingOffice2Icon className='w-5 font-bold' />,
            title: "Structures hospitalieres",
            description: "Cliniques, Laboratoires medicaux, ...",
            rightIcon: <ArrowRightIcon className='w-4 font-bold' />
        },
        {
            leftIcon: <BeakerIcon className='w-5 font-bold' />,
            title: "Pharmacie",
            description: "A mettre ici, ...",
            rightIcon: <ArrowRightIcon className='w-4 font-bold' />
        },
        {
            leftIcon: <AcademicCapIcon className='w-5 font-bold' />,
            title: "Labo pharmaceutiques",
            description: "A mettre ici, ...",
            rightIcon: <ArrowRightIcon className='w-4 font-bold' />
        },
    ]

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Un bouton a ete presse");
    }

    return (
        <div>
            <AuthPage admin={
                <ShieldCheckIcon className="h-6 w-6 text-gray-500" />
            }>
                <form
                    onSubmit={handleSubmit}
                    action="#"
                    className='
                        flex
                        w-full
                        flex-col
                        justify-center
                        items-center
                        md:max-w-85 lg:max-w-85
                    '
                >
                    <div className='w-full m-5'>
                        <h1
                            className='
                            text-4xl text-start font-bold text-blue-900
                            mb-2
                            opacity-95
                            md:text-3xl
                            '
                        >
                            S'inscrire
                        </h1>
                        <p className='text-md text-shadow-2xs font-medium leading-5'>
                            Creer en tant que:
                        </p>
                    </div>

                    <div className='w-full'>

                        {
                            profiles.map((profile) => (
                                <Link
                                    to={
                                        profile.title == "Patient" && "/Page2"
                                    }
                                    key={profile.title}
                                >
                                    <RegisterButton
                                        leftIcon={profile.leftIcon}
                                        title={profile.title}
                                        description={profile.description}
                                        rightIcon={profile.rightIcon}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                </form>
            </AuthPage>
        </div>
    )
}

export default Page1
