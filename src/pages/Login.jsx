import React, { useState } from 'react'
import { Input } from '../components/ui/Input'
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { Button, CodeButton } from '../components/ui/Button';
import { Or } from '../components/ui/Or';
import AuthPage from './AuthPage';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ email, password });
    }

    return (
        <AuthPage>
            <img
                src='./logo.jpeg'
                className='my-5 w-80 md:w-90'
            />

            <form
                onSubmit={handleSubmit}
                action="#"
                className='
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
                    text-2xl 
                    text-center
                    font-semibold 
                    mb-3
                    text-blue-950
                    opacity-90
                    md:text-3xl
                    '
                    >
                        Se connecter
                    </h1>
                </div>

                <div className='h-22 flex flex-col justify-between'>
                    <Input
                        type="text"
                        value={email}
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Adresse e-mail"
                        icone={
                            <EnvelopeIcon
                                className='w-3 opacity-50 md:w-3.5'
                            />}
                    />

                    <Input
                        type="password"
                        value={password}
                        id="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                        icone={<LockClosedIcon className='w-3 opacity-50 md:w-3.5' />}
                    />
                </div>

                <span className='w-full text-xs mb-4 font-semibold leading-5 opacity-75'>
                    <a href="#" className='float-end text-blue-800' >Mot de passe oublie ?</a>
                </span>

                <div className='w-80'>
                    <Button type="submit" disabled={!email || !password} buttonText="Se connecter" />
                </div>

                <div className='w-80 mt-3'>
                    <Or />
                </div>

                <div className='
                    text-center 
                    mb-2 
                    whitespace-nowrap 
                    text-md 
                    font-medium 
                    leading-4 '>
                    Connexion securisee avec OTP <br />
                    <span className='
                        text-xs 
                        font-light 
                        '> 
                        En utilisant un code unique
                    </span>
                </div>

                <div className='w-80 my-1'>
                    <CodeButton icone={<LockClosedIcon className="text-blue-800 hover:text-white w-3 mr-2 md:w-5" />} text="Connexion avec un code unique" />
                </div>

                <div
                    className='
                    text-center 
                    whitespace-nowrap 
                    text-xs 
                    leading-4 my-3'
                >
                    En continuant, vous acceptez
                    nos <a
                        className='
                            text-blue-800 
                            font-semibold'
                    > Conditons</a>
                    <br />
                    et notre <a
                        className='
                            text-blue-800 
                            font-semibold'
                    >Politique de confidentialite</a>
                </div>

                <p className='text-sm text-center'>© 2026 MedAssist+</p>
            </form>
        </AuthPage>
    )
}

export default Login;
