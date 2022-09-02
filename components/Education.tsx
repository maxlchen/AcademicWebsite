import React from 'react';
import ExtLink from './ExtLink'
import data from './data/personalInfo.json'

const Education = (): JSX.Element => {
    return (
        <section className="grid" id="education">
            <h2 className="text-xl font-bold mt-12 mb-4">Education</h2>
            <p className = "text-base ml-4 text-gray-700">
                {/* 🐸 &nbsp;was at &nbsp; */}
                <ul className="list-disc">
                {
                    data.education.map((education, index) => {
                        
                        if (index == 0){
                            return <li key={index}><ExtLink href={education.link}>{education.name}</ExtLink></li>
                        }else{
                            return <li key={index}><ExtLink href={education.link}>{education.name}</ExtLink></li>
                            // return <ExtLink href={education.link}><br/> {education.name}</ExtLink>
                        }
                    })
                }
                </ul>
            </p>
        </section>
    );
};



export default Education;
