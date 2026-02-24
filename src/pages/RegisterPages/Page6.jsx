import React, { useState } from 'react';
import AuthPage from '../AuthPage';
import {
    ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const Page6 = () => {

    const [code, setCode] = useState("");

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
                            Verification
                        </h1>
                    </div>

                    <div className='w-full'>
                       
                        <Input
                            value={code}
                            id="verify code"
                            type='password'
                            onChange={e => setCode(e.target.value)}
                            placeholder="Saisir le code "
                        />

                        <Button buttonText="Continuons" />
                    </div>
                </form>
            </AuthPage>
        </div>
    )
}

export default Page6
