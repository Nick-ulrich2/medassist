import React, { useState } from 'react';
import AuthPage from '../AuthPage';
import {
    ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const Page5 = () => {

    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

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
                    <div className='w-full'>
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
                    </div>

                    <div className='w-full'>
                        <Input
                            value={whatsappNumber}
                            id="whatsappNumber"
                            onChange={e => setWhatsappNumber(e.target.value)}
                            placeholder="Votre numero whatsapp"
                        />

                        <Input
                            value={password}
                            id="password"
                            type='password'
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Votre mot de passe"
                        />

                        <Input
                            value={verifyPassword}
                            id="verify Password"
                            type='password'
                            onChange={e => setVerifyPassword(e.target.value)}
                            placeholder="Saisissez le a nouveau "
                        />

                        <Button buttonText="Continuons" />
                    </div>
                </form>
            </AuthPage>
        </div>
    )
}

export default Page5
