import { useEffect, useState } from 'react';
import './App.css';
import { languages } from './hooks/useSuwar.js';
import Suwar from './components/Suwar.jsx';

function Quran() {
    const [language, setLanguage] = useState(localStorage.qlang ?? '');
    localStorage.setItem('qlang', language);
    console.log(language, localStorage.qlang);
    const [suwar, setSuwar] = useState([]);
    const lang = localStorage.qlang ? localStorage.qlang + '/' : '';
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/${lang}index.json`)
            .then((x) => x.json())
            .then((x) => setSuwar(x));
    }, [language]);
    return (
        <>
            <div className="flex justify-center p-10">
                <div className="">
                    <div className="mb-5">
                        <h1 className="font-bold text-4xl">📖Read the quran</h1>
                        <p>Free quran with translation and tafsir (explaination)</p>
                        <p className="font-bold">Language</p>
                        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
                            {languages.map((language) => (
                                <option key={language.id} value={language.id}>
                                    {language.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-3">
                        <Suwar suwar={suwar}></Suwar>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quran;
