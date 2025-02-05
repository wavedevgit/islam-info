import { useEffect, useState } from 'react';
import './App.css';
import { languages } from './hooks/useSuwar.js';
import Suwar from './components/Suwar.jsx';

function QuranSurah() {
    const [language, setLanguage] = useState(localStorage.qlang ?? '');
    localStorage.setItem('qlang', language);
    console.log(language, localStorage.qlang);
    const [surah, setSurah] = useState([]);
    const lang = localStorage.qlang ? localStorage.qlang + '/' : '';
    const chapter = location.pathname.replace('/quran/', '');
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/${lang}${chapter}.json`)
            .then((x) => x.json())
            .then((x) => setSurah(x));
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

                    <div className="flex justify-center p-10">
                        <div>
                            <h1 className="text-center font-bold text-5xl">
                                سورة {surah.name} {surah.translation ? `(${surah.translation})` : ''}
                            </h1>
                            <p className="mb-5 quranVerse text-center font-bold text-4xl" dir="rtl">
                                بسم الله الرحمن الرحيم
                            </p>

                            <div>
                                {surah?.verses?.map?.((verse) => (
                                    <div
                                        className="mb-5 border-b-2 border-b-gray-400"
                                        key={verse.id}
                                        id={`1:${verse.id}`}
                                    >
                                        <p className="quranVerse text-3xl" dir="rtl">
                                            {verse.text} <span className="text-5xl quranAya">{verse.id}</span>
                                        </p>
                                        <p className="text-2xl mt-5 mb-3">{verse.translation}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuranSurah;
