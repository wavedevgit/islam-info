import { useNavigate } from 'react-router';

export default function Action({ emoji, title, path }) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(path)}
            className="cursor-pointer rounded-md bg-blue-600 hover:bg-blue-700 duration-300 transition-colors text-white w-fit p-5"
        >
            <p className="text-6xl text-center">{emoji}</p>
            <h1 className="font-bold">{title}</h1>
        </div>
    );
}
