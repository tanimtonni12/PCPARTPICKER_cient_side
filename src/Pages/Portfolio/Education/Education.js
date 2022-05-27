import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div>
            <h1 className='text-4xl text-center text-primary font-bold my-10'>EDUCATIONS</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardBorder">

                    <h1 className='text-2xl font-bold'>Bachelor's degree (B.Sc.)</h1>
                    <h1 className='text-1xl font-bold'>International University of Business
                        Agriculture & Technology</h1>
                    <h1 className='text-1xl font-bold'>Department: Computer Science and Engineering </h1>
                    <h1 className='text-1xl font-bold'>CGPA: 3.73</h1>
                    <h1 className='text-1xl font-bold'>Passing Year: 2021</h1>
                </div>


                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardBorder">

                    <h1 className='text-2xl font-bold'>Higher Secondary School Certificate</h1>
                    <h1 className='text-1xl font-bold'>Shaheed Bir Uttam Lt. Anwar Girls' College</h1>
                    <h1 className='text-1xl font-bold'>Group:Science</h1>
                    <h1 className='text-1xl font-bold'>GPA: 4.92</h1>
                    <h1 className='text-1xl font-bold'>Passing Year: 2015</h1>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6 cardBorder">

                    <h1 className='text-2xl font-bold'>Secondary School Certificate</h1>
                    <h1 className='text-1xl font-bold'>Mirpur Govt. High School</h1>
                    <h1 className='text-1xl font-bold'>Group:Science</h1>
                    <h1 className='text-1xl font-bold'>GPA: 5.00</h1>
                    <h1 className='text-1xl font-bold'>Passing Year: 2013</h1>

                </div>


            </div>
        </div>
    );
};

export default Education;