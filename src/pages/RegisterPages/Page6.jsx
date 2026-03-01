import React, { useState } from 'react';
import AuthPage from '../AuthPage';
import {
    ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const Page6 = () => {

    const [code, setCode] = useState("");
    const [counter, setCounter] = useState(59);

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
                            mb-2
                            opacity-95
                            md:text-3xl
                            '
                        >
                            Verification
                        </h1>
                        <p className='text-xs text-shadow-2xs font-medium leading-5'>
                            Vous n'allez pas tarder a recevoir <br />
                            un code de Verification via Whatsapp, <br />
                            svp saisissez le ici
                        </p>
                    </div>

                    <div className='w-full'>

                        <Input
                            className="-mb-1"
                            value={code}
                            id="verify code"
                            type='password'
                            onChange={e => setCode(e.target.value)}
                            placeholder="Saisir le code "
                        />
                        <span className='text-xs -mt-1'>
                            <p className='text-red-500'>Renvoyez le code</p>
                            <p>
                                Renvoi du code disponible dans
                                
                                    
                            </p>
                        </span>

                        <Button buttonText="Verifier" />
                    </div>
                </form>
            </AuthPage>
        </div>
    )
}

export default Page6
