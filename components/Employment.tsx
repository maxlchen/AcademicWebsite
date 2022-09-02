import React from 'react';
import data from './data/employment.json'

const Employment = (): JSX.Element => {
    return (
        <section className="grid" id="employment">
            <h2 className="text-xl font-bold mt-12 mb-4">Employment</h2>
            <div className="text-base ml-4 text-gray-700">
                <ul className="list-disc">
                  {data.map((job) => (
                     <li key={job.company}>{job.company} - {job.role}, {job.team}</li>
                  ))}
                </ul>
            </div>

        </section>
    );
};



export default Employment;
