import React from 'react';
import ssd from '../../images/nav-ssd.png';
import videocard from '../../images/nav-videocard.png'
import power from '../../images/nav-powersupply.png';
import cpucooler from '../../images/nav-cpucooler.png';
import memory from '../../images/nav-memory.png';
import motherboard from '../../images/nav-motherboard.png';


const Ourtools = () => {
    return (
        <div>
            <div><h2 className='text-center text-primary text-4xl font-bold my-10'>The Products We Manufacture</h2></div>
            <div className='flex items-center justify-center'>
                <div class=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-box">
                    <div class="card w-64   bg-neutral shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={motherboard} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-white">Motherboard</h2>
                        </div>
                    </div>
                    <div class="card w-64  bg-neutral shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={memory} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-white">Memory</h2>
                        </div>
                    </div>
                    <div class="card w-64  bg-neutral shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={ssd} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-white">Storage</h2>
                        </div>
                    </div>
                    <div class="card w-64  bg-neutral shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={cpucooler} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-white">CPU Cooler</h2>
                        </div>
                    </div>
                    <div class="card w-64  bg-neutral shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={power} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-white">Power Supplies</h2>
                        </div>
                    </div>
                    <div class="card w-64  bg-neutral shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={videocard} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-white">Video Card</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourtools;