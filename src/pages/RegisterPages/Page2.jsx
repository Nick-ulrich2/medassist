import React from 'react';
import AuthPage from '../AuthPage';
import { RegisterButton } from '../../components/ui/Button';
import {
    UserIcon,
    UserCircleIcon,
    UsersIcon,
    ArrowRightIcon,
    ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const Page2 = () => {

    const civilites = [
        {
            leftIcon: <UserIcon className='w-5 font-bold' />,
            title: "Homme",
            rightIcon: <ArrowRightIcon className='w-4 font-bold' />
        },
        {
            leftIcon: <UserCircleIcon className='w-5 font-bold' />,
            title: "Femme",
            rightIcon: <ArrowRightIcon className='w-4 font-bold' />
        },
        {
            leftIcon: <UsersIcon className='w-5 font-bold' />,
            title: "Autre",
            rightIcon: <ArrowRightIcon className='w-4 font-bold' />
        }
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
                    w-full
                    flex
                    flex-col
                    justify-center
                    items-center
                '
                >
                    <div className='w-full m-5'>
                        <h1
                            className='
                            text-4xl text-start font-bold text-blue-900
                            mb-3
                            opacity-95
                            md:text-3xl
                            '
                        >
                            Civilite
                        </h1>

                        <p className='text-md text-shadow-2xs font-medium leading-5'>
                            Etes vous : 
                        </p>
                    </div>

                    <div className='w-full'>
                        {
                            civilites.map((civilite) => (
                                <Link to="/Page3" key={civilite.title}>
                                    <RegisterButton
                                        leftIcon={civilite.leftIcon}
                                        title={civilite.title}
                                        rightIcon={civilite.rightIcon}
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

export default Page2;
