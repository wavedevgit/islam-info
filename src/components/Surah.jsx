import { useNavigate } from 'react-router';

export default function Surah({ surah }) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate('/quran/' + surah.id)}
            className="cursor-pointer rounded-md bg-blue-600 hover:bg-blue-700 duration-300 transition-colors text-white w-fit p-5"
        >
            <div className="flex gap-1">
                <p className="font-bold text-green-400">Name (Arabic name)</p>
                <p>{surah.name}</p>
            </div>
            <div className="flex gap-1">
                <p className="font-bold text-green-400">Name (Transliteration)</p>
                <p>{surah.transliteration}</p>
            </div>
            {surah.translation && (
                <div className="flex gap-1">
                    <p className="font-bold text-green-400">Name (Translated name)</p>
                    <p>{surah.translation}</p>
                </div>
            )}
            <div className="flex gap-1">
                <p className="font-bold text-green-400">Total verses</p>
                <p>{surah.total_verses}</p>
            </div>
            <div className="flex gap-1">
                <p className="font-bold text-green-400">Type</p>
                <p>{surah.type}</p>
            </div>
        </div>
    );
}
