import React from 'react';

import $ from 'jquery';

function Navbar() {
    const handleToggle = () => {
        $('#sidebar').toggleClass('active');
    };

    return (
        <nav
            id='sidebar'
            className='active'
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
                    <div class="col "><i class="fab fa-earlybirds fa-2x text-success"></i></div>

                      <div class="col "><h6 class="text-dark">Sahil</h6></div>
                      
                      <div class="col "><i class="fas fa-bell text-danger"></i></div>
                      <div class="col "><i class="fas fa-sliders-h text-primary"></i></div>
                      </div>
                </button>
                
               </div>
            
            <ul class='list-unstyled '>
            
                <li>
                    
                    <a href='#homeSubmenu'> <div class="row">
                      <div class="col "><h3 class='text-dark'>6:25</h3></div>
                      
                      <div class="col "><h3 class='text-dark'>120</h3></div>

                      <div class="col "><h3 class='text-dark'>1.84</h3></div>
                                            <div class="col "><i class="fas fa-moon text-primary"></i><span class='text-dark'>Hr</span><div class="progress ">
                        <div class="progress-bar bg-primary" role="progressbar" style={{width:'70%'}}  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                                            
                                            <div class="col "><i class="fas fa-heartbeat text-danger"></i><span class="text-dark">B</span><div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{width:'50%'}}  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>

                                            <div class="col "><i class="fas fa-apple-alt text-success"></i><span class="text-dark">K</span><div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style={{width:'28%'}}  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                      
                      </div></a>
                </li>
                
                <li>
                <a href='#'><li class="list-group-item d-flex flex-row bor2 ">
                          
                          <div class="col-md-1 col-lg-1 col-xl-1  ">
                          
                          <i class="fas fa-address-card fa-3x text-dark"></i>
                          
                        </div>
                         
                        <div class="col-md-1 col-lg-1 col-xl-1 mx-auto ">
                        <h6 class='font-weight-light text-dark '>Trainer</h6>
                       
                          
                       <div class="btn btn-danger btn-sm" >Sign up</div>
                          
                        </div>
                        
                        
                    </li></a>
                </li>
                <li>
                <a  class="text-dark">Today training</a>
                </li>
                
                <li>
                <a href='#'><li class="list-group-item d-flex flex-row bor bg-primary cir">
                          
                          <div class="col-md-1 col-lg-1 col-xl-1  ">
                          <h6 class="text-uppercase text-wight-light">Sport clube</h6>
                       
                          
                          <span class="badge badge-pill badge-secondary">10:30</span>
                          
                          
                        </div>
                         
                        <div class="col-md-1 col-lg-1 col-xl-1 mx-auto ">
                          <h6 class="text-uppercase font-weight-bold">24</h6>
                       
                          <p class='text-white'>
                            min
                          </p>
                          
                        </div>
                        
                        <i class="fas fa-ellipsis-v text-white"></i>
                    </li></a>
                </li>
                
                <li>
                    <a href='#' ><li class="list-group-item d-flex flex-row bor1 bg-danger ">
                          
                              <div class="col-md-1 col-lg-1 col-xl-1  ">
                              <h6 class="text-wight-light text-uppercase ">Sport club</h6>
                           
                              
                              <span class="badge badge-pill badge-secondary">12:00</span>
                              
                              
                            </div>
                             
                            <div class="col-md-1 col-lg-1 col-xl-1 mx-auto ">
                              <h6 class="text-uppercase font-weight-bold">24</h6>
                           
                              <p class='text-white'>
                                min
                              </p>
                              
                            </div>
                            
                            <i class="fas fa-ellipsis-v text-white"></i>
                        </li></a>
                </li>
                
            </ul>
            <div class='navFooter'>
            
                <div class='bore'>
                
                <ul class="list-group pmd-list ">
                
                       
                
                        <li class="list-group-item d-flex flex-row">
                          <div class="imag"></div> 
                            <span class="media-body " ><p class='text-dark font-weight-bold d-flex p-2'> SAHIL </p></span>
                            
                            <div class="btn btn-light " ><i class="fas fa-envelope-open-text text-info"></i></div>
                        </li>
                    </ul>
                    
                    
                
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;
