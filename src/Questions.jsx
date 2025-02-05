import { useEffect, useState } from 'react';
import './App.css';

function Category({ category }) {
    return (
        <div className="p-3 mt-5 rounded-md bg-slate-600 w-fit">
            <p className="font-bold">{category.title}</p>
            <ul>
                {category.articles.map((article) => (
                    <li>
                        <a href={article.content} target="_blank" className="cursor-pointer text-green-600 hover:text-green-700">
                            {article.title}
                        </a>
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
                    content: 'https://github.com/wavedevgit/islam-info/blob/main/articles/islam/what_is_islam.md',
                },
                {
                    title: 'How to convert to islam?',
                    content:
                        'https://github.com/wavedevgit/islam-info/blob/main/articles/islam/how_to_convert_to_islam.md',
                },
                {
                    title: 'What to know if you convert to islam?',
                    content:
                        'https://github.com/wavedevgit/islam-info/blob/main/articles/islam/what_to_know_if_you_convert_to_islam.md',
                },
                {
                    title: 'What is the noble quran and the sunnah?',
                    content:
                        'https://github.com/wavedevgit/islam-info/blob/main/articles/islam/what_is_the_noble_quran_and_the_sunnah.md',
                },
                {
                    title: 'What is fiqh?',
                    content: 'https://github.com/wavedevgit/islam-info/blob/main/articles/islam/what_is_fiqh.md',
                },
                {
                    title: 'Five Pillars of Islam (Arkan islam)?',
                    content:
                        'https://github.com/wavedevgit/islam-info/blob/main/articles/islam/five_pillars_of_islam.md',
                },
                {
                    title: 'Pillars of Faith (Arkan iman)',
                    content: 'https://github.com/wavedevgit/islam-info/blob/main/articles/islam/five_of_faith.md',
                },
            ],
        },
        {
            title: '🕋 Prayers (salat)',
            articles: [
                {
                    title: 'What is salat?',
                    content: 'https://github.com/wavedevgit/islam-info/blob/main/articles/prayers/what_is_salat.md',
                },
                {
                    title: 'What is wudu and how to commit wudu?',
                    content: 'https://github.com/wavedevgit/islam-info/blob/main/articles/prayers/what_is_wudu.md',
                },
                {
                    title: 'How to pray salat?',
                    content: 'https://github.com/wavedevgit/islam-info/blob/main/articles/prayers/how_to_pray_salat.md',
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
