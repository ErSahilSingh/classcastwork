import React from 'react';

import $ from 'jquery';

function Navbar() {
    const handleToggle = () => {
        $('#sidebar').toggleClass('active');
    };

    return (
        <nav
            id='sidebar'
            className=''
            style={{
                zIndex: 99999,
                position: 'fixed',
                bottom: 0,
                top: 0,
                right:0
            }}>
            <div class='sidebar-header'>
                <button
                    type='button'
                    id='sidebarCollapse'
                    class='btn btn-main '
                    style={{ background: 'transparent' }}
                    onClick={handleToggle}>
                    
                    
                    <div class="row">
                    <div class="col "><i class="fas fa-user-tie  text-white bg-warning"></i></div>

                      <div class="col "><h6 class="text-dark">Sahil</h6></div>
                      
                      <div class="col "><i class="far fa-bell text-dark btn btn-light"></i></div>
                      <div class="col "><i class="fas fa-sliders-h text-dark btn btn-light"></i></div>
                      </div>
                </button>
                
               </div>
            
            <ul class='list-unstyled '>
            
                <li>
                    
                    <a href='#homeSubmen'> <h6 class="text-dark">Health</h6><div class="row">
                      
                      <div class="col "><h3 class='text-dark '>6:25</h3></div>
                      
                      <div class="col "><h3 class='text-dark'>120</h3></div>

                      <div class="col "><h3 class='text-dark'>1.84</h3></div>
                    </div>
                    <div class="row">
                                            <div class="col "><i class="fas fa-moon text-primary"></i><span class='text-secondary'><small>Hour</small></span><div class="progress " >
                        <div class="progress-bar bg-primary" role="progressbar" style={{width:'70%'}}  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                                            
                                            <div class="col "><i class="fas fa-heartbeat text-danger"></i><span class="text-secondary"><small>Bpm</small></span><div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{width:'50%'}}  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>

                                            <div class="col "><i class="fas fa-apple-alt text-success"></i><span class="text-secondary"><small>Kcal</small></span><div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style={{width:'28%'}}  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                      
                      </div></a>
                </li>
                
                <li>
                <a href='#'><div class="container  bor2 ">
                          
                          
                         
                        
                        <div class="row">
                      <div class="col-4 "><i class="fab fa-earlybirds fa-4x text-danger"></i></div>
                      
                      <div class="col-8 "><p class='font-weight-light text-dark text-center'><small >Sign up for a personal trainer to improve your result <br/></small><span class="badge badge-pill badge-warning text-white ">Sign up</span></p></div>
 
                        </div>
                        
                        
                    </div></a>
                </li>
                
                
                <li>
                <a href='#'><h6 class="text-dark">Today trainings</h6> < div class="container bor bg-primary">
                          
                <div class="row ">
                      
                      <div class="col-4 "><p >Box<small> Sport-Club</small><span class="badge badge-pill badge-light">12:00</span></p></div>
                      
                      <div class="col-3 "><p class='text-white text-center py-1'> 40<small> min</small> Warmup</p></div>
                      <div class="col-3 "><p class='text-white text-center py-1'> 20<small> min</small> Pullup</p></div>

                      <div class="col-2 "><i class="fas fa-ellipsis-v text-white py-3"></i></div>
                    </div>
                    </div></a>
                </li>
                
                <li>
                    <a href='#' ><div class="container bor1 ">
                          
                    <div class="row ">
                      
                      <div class="col-4 "><p >Crossfit<small> Sport-Club</small><span class="badge badge-pill badge-light">12:00</span></p></div>
                      
                      <div class="col-3 "><p class='text-white text-center py-1'> 40<small> min</small> Warmup</p></div>
                      <div class="col-3 "><p class='text-white text-center py-1'> 20<small> min</small> Pullup</p></div>

                      <div class="col-2 "><i class="fas fa-ellipsis-v text-white py-3"></i></div>
                      
                    </div>
                    </div><i class="fas fa-ellipsis-h text-secondary py-3"></i></a>
                </li>
                
            </ul>
            <div class='navFooter'>
            
                <div class='bore'>
                
                <ul class="list-group pmd-list ">
                
                       
                
                        <li class="list-group-item ">
                        
                      
                     <div class="row">
                      
                      <div class="col-2 imag"></div>
                      
                      <div class="col-3 "><p class='text-dark font-weight-bold d-flex '> Sahil</p></div>
                      <div class="col-3 "></div>
                      

                      <div class="col-4 text-right"><i class="far fa-comment-dots text-dark btn btn-light"></i></div>
                    </div>
                        </li>
                    </ul>
                    
                    
                
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;
