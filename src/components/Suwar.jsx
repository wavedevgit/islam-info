import Surah from './Surah.jsx';

export default function Suwar({ suwar }) {
    return (
        <>
            {suwar.map((surah) => (
                <Surah key={surah.id} surah={surah}></Surah>
            ))}
        </>
    );
}
