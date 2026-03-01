import React, { useState } from 'react';
import AuthPage from '../AuthPage';
import {
    ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const Page4 = () => {

    const [birthday, setBirthday] = useState("");
    const [placeBirthday, setPlaceBirthday] = useState("");
    // A modifier car les pays, villes et quartiers doivent etre geres par une ApI
    const [countries, setCountries] = useState("");
    const [town, setTown] = useState("");
    const [quater, setQuater] = useState("");

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
                            Date / Localisation
                        </h1>

                        <p className='text-xs text-shadow-2xs font-medium leading-5'>
                            Quand et ou etes vous ne?
                            Ou pouvons nous vous rencontrer? 
                        </p>
                    </div>

                    <div className='w-full'>
                        <Input
                            value={birthday}
                            id="birthday"
                            onChange={e => setBirthday(e.target.value)}
                            placeholder="Date de naissance"
                        />

                        <Input
                            value={placeBirthday}
                            id="placeBirthday"
                            onChange={e => setPlaceBirthday(e.target.value)}
                            placeholder="Lieu de naissance"
                        />

                        <Input
                            value={countries}
                            id="countries"
                            type='email'
                            onChange={e => setCountries(e.target.value)}
                            placeholder="De quel pays venez vous?"
                        />

                        <Input
                            value={town}
                            id="town"
                            type='email'
                            onChange={e => setTown(e.target.value)}
                            placeholder="De quelle ville venez vous?"
                        />

                        <Input
                            value={quater}
                            id="quater"
                            type='email'
                            onChange={e => setQuater(e.target.value)}
                            placeholder="De quel quartier venez vous?"
                        />

                        <Button buttonText="Continuons" />
                    </div>
                </form>
            </AuthPage>
        </div>
    )
}

export default Page4
