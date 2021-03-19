import React from 'react';
import Navbar from './Navbar';
import $ from 'jquery';

function Home() {
    const handleToggle = () => {
        $('#sidebar').toggleClass('active');
    };
    return (
        <div class='wrapper'>
            <Navbar />
            <div id='content'>
                <div class='container-fluid ustify-content-center'>
                    <button
                        type='button'
                        id='sidebarCollapse'
                        class='btn '
                        style={{
                            background: 'transparent',
                            position: 'absolute',
                            top: '10px',
                            right: 0,
                            zIndex: 1000,
                        }}
                        onClick={handleToggle}>
                        <i class="fab fa-earlybirds fa-2x "></i>
                    </button>
                    <h1
                        className='text-center text-success'
                        >
                       Hello, ClassCast
                    </h1>
                    <p class="text-dark text-center">This is my work i hope you like it.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
