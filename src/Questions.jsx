import { useEffect, useState } from 'react';
import './App.css';

function Category({ category }) {
    return (
        <div className="p-3 mt-5 rounded-md bg-slate-600 w-fit">
            <p className="font-bold">{category.title}</p>
            <ul>
                {category.articles.map((article) => (
                    <li>
                        <a className="cursor-pointer text-green-600 hover:text-green-700">{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Questions() {
    const cateogires = [
        {
            title: '☪️ Islam',
            articles: [
                {
                    title: 'What is islam?',
                },
                {
                    title: 'How to convert to islam?',
                },
                {
                    title: 'What to know if you convert to islam?',
                },
                {
                    title: 'What is the noble quran and the sunnah?',
                },
                {
                    title: 'What is fiqh?',
                },
                {
                    title: 'Five Pillars of Islam (Arkan islam)?',
                },
                {
                    title: 'Pillars of Faith (Arkan iman)',
                },
            ],
        },
        {
            title: '🕋 Prayers (salat)',
            articles: [
                {
                    title: 'What is salat?',
                },
                {
                    title: 'What is wudu and how to commit wudu?',
                },
                {
                    title: 'How to pray salat?',
                },
            ],
        },
    ];
    const downloadDb = () => {
        navigator.clipboard.writeText(JSON.stringify(cateogires, null, 4));
        alert('Copied the database to clipboard!');
    };
    return (
        <>
            <div className="flex justify-center p-10">
                <div className="">
                    <div className="mb-5">
                        <h1 className="font-bold text-4xl">🗞️Questions and answers</h1>
                        <p>Find here questions and answers (fiqh) and also guides</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-3xl">Categories</h1>
                        <button
                            onClick={downloadDb}
                            className="rounded-full bg-yellow-500 hover:bg-yellow-600 duration-300 transition-all p-3 mt-5"
                        >
                            Copy database as json
                        </button>
                        <div className="grid grid-cols-3 gap-5">
                            {cateogires.map((category) => (
                                <Category category={category} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Questions;
