import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Input, InputPassword } from '../components/ui/Input'
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { Button, CodeButton } from '../components/ui/Button';
import { Or } from '../components/ui/Or';
import AuthPage from './AuthPage';

export function LoginHeader() {
    return (
        <div className='w-full'>
            <h1
                className='
                    text-2xl text-center font-bold text-blue-900
                    mb-3 max-lg:mt-7 max-lg:mb-5
                    opacity-95
                    max-lg:text-4xl
                '
            >
                Se connecter
            </h1>
        </div>
    )
}

export function Inputs({email, setEmail, showPassword, password, setPassword, setShowPassword}) {
    return (
        <div className='w-full flex flex-col gap-1 justify-between'>
            <Input
                type="text"
                value={email}
                id="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Adresse e-mail"
                icone={
                    <EnvelopeIcon
                        className='w-4 max-lg:w-5 opacity-70 '
                    />
                }
            />

            <InputPassword
                type={showPassword ? "text" : "password"}
                value={password}
                id="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Mot de passe"
                icone1={<LockClosedIcon className='w-4 max-lg:w-5 opacity-70' />}
                icone2={
                    showPassword ?
                        <EyeSlashIcon aria-label='Masquer le mot de passe' className='w-4 max-lg:w-5 opacity-70' onClick={() => setShowPassword(false)} /> :
                        <EyeIcon aria-label='Afficher le mot de passe' className='w-4 max-lg:w-5 opacity-70' onClick={() => setShowPassword(true)} />
                }
            />
        </div>
    )
}

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Fonctionn de validation du formulaire 
    const isFormValid = email.trim() && password.trim();

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ email, password });
    }

    return (
        <AuthPage>
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
                '
            >
                <LoginHeader />

                <Inputs email={email} setEmail={setEmail} showPassword={showPassword} password={password} setPassword={setPassword} setShowPassword={setShowPassword}/>

                <span className='w-full mb-4 font-semibold opacity-75'>
                    <Link to="#" className='text-sm max-lg:text-md float-end text-blue-800' >Mot de passe oublié ?</Link>
                </span>

                <div className='w-full'>
                    <Button type="submit" disabled={!isFormValid} buttonText="Se connecter" />
                </div>

                <div className='w-full mt-3'>
                    <Or />
                </div>

                <div className='
                        text-center 
                        mb-2 max-lg:mb-4
                        whitespace-nowrap 
                        text-md max-lg:text-xl
                        font-medium 
                        leading-4 max-lg:leading-6
                    '
                >
                    Connexion securisee avec OTP <br />
                    <span className='
                            text-xs max-lg:text-lg
                            font-light 
                        '
                    >
                        En utilisant un code unique
                    </span>
                </div>

                <div className='w-full my-1'>
                    <CodeButton icone={<LockClosedIcon className="text-blue-800 hover:text-white w-4 mr-2 md:w-5 max-lg:w-6" />} text="Connexion avec un code unique" />
                </div>

                <div className='flex flex-col w-full text-sm max-lg:text-lg text-center my-3'>
                    <span>Vous n'avez pas de compte ? </span>
                    <span>
                        <Link to="/page1" className='text-blue-800 max-lg:text-xl font-bold underline'>
                            Créer un compte
                        </Link>
                    </span>
                </div>

                <div
                    className='
                        text-center 
                        whitespace-nowrap 
                        text-xs max-lg:text-[16px]
                        leading-4 max-lg:leading-5 my-3'
                >
                    En continuant, vous acceptez
                    nos <Link
                        className='
                                text-blue-800 
                                font-semibold'
                    > Conditons</Link>
                    <br />
                    et notre <Link
                        className='
                                text-blue-800 
                                font-semibold'
                    >Politique de confidentialite</Link>
                </div>

                <p className='text-sm max-lg:text-md max-lg:mt-8 text-center'>© 2026 MedAssist+</p>
            </form>
        </AuthPage>
    )
}

export default Login;
