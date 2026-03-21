import React, { useState } from 'react';
import AuthPage from '../AuthPage';
import {
    ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';


const Page3 = () => {

    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");

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
                            mb-2
                            opacity-95
                            md:text-3xl
                            '
                        >
                            Nom Complet
                        </h1>

                        <p className='text-md text-shadow-2xs font-medium leading-5'>
                            Comment devons nous vous appeler? 
                        </p>
                    </div>

                    <div className='w-full'>
                        <Input
                            value={name}
                            id="name"
                            onChange={e => setName(e.target.value)}
                            placeholder="Votre nom svp"
                        />

                        <Input
                            value={firstName}
                            id="firstName"
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="Votre prenom svp"
                        />  

                        <Button buttonText="Continuons"/>
                    </div>
                </form>
            </AuthPage>
        </div>
    )
}

export default Page3
