import React from 'react';
import { ReactComponent as CasesPrev } from '../assets/svg/arrow-left.svg';
import { ReactComponent as CasesNext } from '../assets/svg/arrow-right.svg';

const caseStudies = [
    {
        id: 1,
        subtitle: 'one',
        title: 'lorem',
        img: 'lumin-min',
    },
    {
        id: 2,
        subtitle: 'one',
        title: 'title one',
        img: 'curology-min',
    },
    {
        id: 3,
        subtitle: 'one',
        title: 'title one',
        img: 'yourspace-min',
    }
]

const Cases = () => {
    return (
        <section className='cases'>
            <div className='container-fluid'>
                <div className='cases-navigation'>
                    <div className='cases-arrow prev disabled'>
                        <CasesPrev />
                    </div>
                    <div className='cases-arrow next'>
                        <CasesNext />
                    </div>
                </div>
                <div className='row'>
                    {caseStudies.map(caseItem => (
                        <div className='case' key={caseItem.id}>
                            <div className='case-details'>
                                <span>{caseItem.subtitle}</span>
                                <h2>{caseItem.title}</h2>
                            </div>
                            <div className='case-image'>
                                <img 
                                    src={require(`../assets/${caseItem.img}.jpg`)} 
                                    alt="img" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cases;
