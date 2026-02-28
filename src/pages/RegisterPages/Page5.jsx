import React, { useState } from 'react';
import AuthPage from '../AuthPage';
import {
    ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const Page5 = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [email, setEmail] = useState("");

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
                    m-2 
                    flex
                    flex-col
                    justify-center
                    items-center
                    md:max-w-85 lg:max-w-85
                '
                >
                    <div className='w-full m-9'>
                        <h1
                            className='
                            text-2xl text-start font-bold text-blue-900
                            mb-3
                            opacity-95
                            md:text-3xl
                            '
                        >
                            Contact
                        </h1>
                        <p className='text-xs text-shadow-2xs font-medium leading-5'>
                            Vous n'allez pas tarder a recevoir <br />
                            un code de Verification via Whatsapp, <br />
                            svp saisissez le ici
                        </p>
                    </div>

                    <div className='w-full'>

                        {/* Numero joignable direct */}
                        <Input
                            value={phoneNumber}
                            id="phoneNumber"
                            onChange={e => setPhoneNumber(e.target.value)}
                            placeholder="Votre numero joignable"
                        />

                        <Input
                            value={whatsappNumber}
                            id="whatsappNumber"
                            onChange={e => setWhatsappNumber(e.target.value)}
                            placeholder="Votre numero whatsapp"
                        />

                        <Input
                            value={email}
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Votre adresse mail"
                        />

                        <Button buttonText="Continuons" />
                    </div>
                </form>
            </AuthPage>
        </div>
    )
}

export default Page5
