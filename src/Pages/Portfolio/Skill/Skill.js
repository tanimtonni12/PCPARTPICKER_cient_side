import React from 'react';
import './Skill.css'
import html from '../../../images/html.png'
import css from '../../../images/css.png'
import node from '../../../images/node.png'
import mongodb from '../../../images/mongodb.jpg'
import react from '../../../images/react.png'
import js from '../../../images/javascript.png'
import firebase from '../../../images/firebase.png'

const Skill = () => {



    return (
        <div>
            <h1 className='text-4xl text-center text-primary font-bold my-10'>SKILLS</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6 cardBorder2">

                    <div class="avatar">
                        <div class="w-24 rounded mx-auto mb-3">
                            <img src={html} alt="" />
                        </div>
                    </div>

                    <h1 className='text-2xl font-bold'>95%</h1>



                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6 cardBorder2">

                    <div class="avatar">
                        <div class="w-24 rounded mx-auto mb-3">
                            <img src={css} alt="" />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold  text-center'>90%</h1>


                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardBorder2">



                    <div class="avatar">
                        <div class="w-24 rounded mx-auto mb-3">
                            <img src={js} alt="" />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold text-center'>75%</h1>

                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardBorder2">

                    <div class="avatar">
                        <div class="w-24 rounded mx-auto mb-3">
                            <img src={react} alt="" />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold text-center'>80%</h1>

                </div>


                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardBorder2">

                    <div class="avatar">
                        <div class="w-24 rounded mx-auto mb-3">
                            <img src={node} alt="" />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold text-center'>70%</h1>

                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardBorder2">

                    <div class="avatar">
                        <div class="w-24 rounded mx-auto mb-3">
                            <img src={mongodb} alt="" />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold text-center'>80%</h1>

                </div>


                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardBorder2 ">

                    <div class="avatar">
                        <div class="w-24 rounded mx-auto mb-3">
                            <img src={firebase} alt="" />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold text-center'>100%</h1>

                </div>


            </div>
        </div >
    );
};

export default Skill;