import React from 'react';
import { useNavigate } from 'react-router-dom';

const Items = ({ currentItems }) => {
    const navigateTo = useNavigate();

    const Handler = (selectedProject) => {
        navigateTo('/Projects', { state: selectedProject });
    }

    return (
        <>
            {currentItems.map((feature) => {
                return (
                    <div className="card mb-3" style={{ cursor: 'pointer' }} onClick={() => Handler(feature)}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className='img' src={feature.image}></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div key={feature.project} >
                                        <h2 className="card-title">{feature.title}</h2>
                                        <p className="card-text">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}


export default Items;