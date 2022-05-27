import React from 'react';
import Education from '../Portfolio/Education/Education';
import Skill from '../Portfolio/Skill/Skill';
import img from '../../images/tooni2.jpg'



const Protfolio = () => {
    return (
        <div className='grid sm:grid-cols mb-10'>
            <div className='flex justify-center '>
                <div class="hero  bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">

                        <div class="avatar">
                            <div class="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt="tanim" />
                            </div>
                        </div>



                        <div>
                            <h1 class="text-4xl font-bold">I'm <span className='text-primary'>Tanim Tonni</span></h1>
                            <p class="py-6 font-bold text-primary text-2xl">Frontend Web Developer</p>


                        </div>
                    </div>
                </div>
            </div>



            <div className='mt-12  px-12'>
                <Education></Education>
            </div>




            <div className='mt-12  px-12'>
                <Skill></Skill>
            </div>


        </div>
    );
};

export default Protfolio;