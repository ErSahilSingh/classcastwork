import React from "react";

import $ from "jquery";

function Navbar() {
  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };

  return (
    <nav
      id="sidebar"
      className=""
      style={{
        zIndex: 99999,
        position: "fixed",
        bottom: 0,
        top: 0,
        right: 0,
      }}
    >
      <div class="sidebar-header">
        <button
          type="button"
          id="sidebarCollapse"
          class="btn btn-main "
          style={{ background: "transparent" }}
          onClick={handleToggle}
        >
          <div class="row justify-content-start align-items-center">
            <div class="col-md-3 col-3 px-0">
              <i class="fas fa-user-tie  text-white bg-warning"></i>
            </div>

            <div class="col-md-5 col-5 px-0 text-left">
              <h6 class="text-dark mb-0"
              style={{fontFamily:'Poppins, sans-serif'}}>Sahil</h6>
               <h6 class="text-dark my-0"
              style={{fontFamily:'Poppins, sans-serif',fontSize:'0.6em'}}>Free account </h6>
            </div>

            <div class="col-md-2 col-2">
              <i class="far fa-bell text-dark btn btn-light"></i>
            </div>
            <div class="col-md-1 col-1">
              <i class="fas fa-sliders-h text-dark btn btn-light"></i>
            </div>
          </div>
        </button>
      </div>

      <ul class="list-unstyled ">
        <li>
          <a href="#homeSubmen">
            
            <h6 class="text-dark">Health</h6>
            <div class="row">
              <div class="col ">
                <h3 class="text-dark mx-0" style={{ fontSize:'2rem'}}>6:25</h3>
              </div>

              <div class="col ">
                <h3  class="text-dark mx-0" style={{ fontSize:'2rem'}}>120</h3>
              </div>

              <div class="col ">
                <h3  class="text-dark mx-0" style={{ fontSize:'2rem'}}>1.84</h3>
              </div>
            </div>
            <div class="row justify-content-center align-items-center">
              <div class="col ">
                <i class="fas fa-moon text-primary"></i>
                <span class="text-secondary">
                  <small>Hour</small>
                </span>
                <div class="progress ">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="col ">
                <i class="fas fa-heartbeat text-danger"></i>
                <span class="text-secondary">
                  <small>Bpm</small>
                </span>
                <div class="progress">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="col ">
                <i class="fas fa-apple-alt text-success"></i>
                <span class="text-secondary">
                  <small>Kcal</small>
                </span>
                <div class="progress">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "28%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div class="container  bor2 ">
              <div class="row justify-content-center align-items-center">
                <div class="col-4 py-2">
                  <i class="fab fa-earlybirds fa-4x text-danger"></i>
                </div>

                <div class="col-8 ">
                  <p className="my-0 pb-0  align-self-center text-center" style={{ fontSize: "90%",color:'black',fontWeight:'400',lineHeight:1.5 }}>
                   
                      Sign up for a personal 
                    
                   
                  </p>
                  <p className="mb-0 pb-0 align-self-center text-center" style={{ fontSize: "90%",color:'black',fontWeight:'400',lineHeight:1.5 }}>
                   
                 trainer to improve 
                 
                
               </p>
               <p className="mb-0 pb-0 align-self-center text-center" style={{ fontSize: "90%",color:'black',fontWeight:'400',lineHeight:1.5 }}>
                   
                 your result
                 
                
               </p>
                  <p
                    className="py-1 my-1"
                    style={{
                      border: "1px solid white",
                      borderRadius: 10,
                      background: "#FFCB33",
                      color: "white",
                      fontWeight: "400",
                      width: "50%",
                     
                      textAlign:'center',
                      margin:'auto'
                    }}
                  >
                    Sign Up
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <h6 class="text-dark">Today trainings</h6>
            <div class="container bor ">
              <div class="row justify-content-center align-items-center" >
                <div class="col-4 py-2" >
                  <p className="mb-0 pb-0">Box</p>
                  <p className="mb-0 pb-2" style={{ fontSize: "75%" }}>
                    Sport Club
                  </p>
                  <p
                    className="px-3 mb-1"
                    style={{
                      border: "1px solid white",
                      borderRadius: 5,
                      background: "white",
                      color: "black",
                      fontWeight: "400",
                      width: "90%",
                      height: "70%",
                    }}
                  >
                    10:00
                  </p>
                </div>

                <div class="col-3 px-0 align-self-center text-center">
                  <p className="mb-0 pb-0" style={{ fontSize: "150%" }}>
                    40
                  </p>
                  <p className="mb-0 pb-0" style={{ fontSize: "75%" }}>
                    min
                  </p>
                  <p
                    className="mb-1 pb-0"
                    style={{ fontWeight: "300", fontSize: "90%" }}
                  >
                    Warm-up
                  </p>
                </div>
                <div class="col-3 px-0 align-self-center text-center">
                  <p className="mb-0 pb-0" style={{ fontSize: "150%" }}>
                    20
                  </p>
                  <p className="mb-0 pb-0" style={{ fontSize: "75%" }}>
                    min
                  </p>
                  <p
                    className="mb-0 pb-0"
                    style={{ fontWeight: "300", fontSize: "90%" }}
                  >
                    Stretch
                  </p>
                </div>

                <div class="col-2 ">
                  <i
                    class="fas fa-ellipsis-v text-white py-3"
                    style={{ fontSize: "125%" }}
                  ></i>
                </div>
              </div>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div class="container bor1 ">
              <div class="row justify-content-center align-items-center">
                <div class="col-4 py-2">
                <p className="mb-0 pb-0">Crossfit</p>
                  <p className="mb-0 pb-2" style={{ fontSize: "75%" }}>
                    Sport Club
                  </p>
                  <p
                    className="px-3 mb-1"
                    style={{
                      border: "1px solid white",
                      borderRadius: 5,
                      background: "white",
                      color: "black",
                      fontWeight: "400",
                      width: "90%",
                      height: "70%",
                    }}
                  >
                    12:00
                  </p>
                </div>

                <div class="col-3 px-0 align-self-center text-center">
                <p className="mb-0 pb-0" style={{ fontSize: "150%" }}>
                    40
                  </p>
                  <p className="mb-0 pb-0" style={{ fontSize: "75%" }}>
                    min
                  </p>
                  <p
                    className="mb-1 pb-0"
                    style={{ fontWeight: "300", fontSize: "90%" }}
                  >
                    Warm-up
                  </p>
                </div>
                <div class="col-3 px-0 align-self-center text-center">
                  <p className="mb-0 pb-0" style={{ fontSize: "150%" }}>
                    20
                  </p>
                  <p className="mb-0 pb-0" style={{ fontSize: "75%" }}>
                    min
                  </p>
                  <p
                    className="mb-0 pb-0"
                    style={{ fontWeight: "300", fontSize: "90%" }}
                  >
                    Stretch
                  </p>
                </div>

                <div class="col-2 ">
                  <i class="fas fa-ellipsis-v text-white py-3"   style={{ fontSize: "125%" }}></i>
                </div>
              </div>
            </div>
            <i class="fas fa-ellipsis-h text-secondary py-3"></i>
          </a>
        </li>
      </ul>
      <div class="navFooter">
        <div class="bore">
          <ul class="list-group pmd-list ">
            <li class="list-group-item py-1">
              <div class="row justify-content-center align-items-center">
                <div class="col-2 col-md-2 imag"></div>

                <div class="col-3 col-md-3 ">
                  <p class="text-dark font-weight-bold d-flex my-0 "style={{fontFamily:'Poppins, sans-serif'}}> Sahil</p>
                  <p class="text-dark my-0"
              style={{fontFamily:'Poppins, sans-serif',fontSize:'0.6em'}}>MMA Co </p>
                </div>
                <div class="col-3 col-md-3"></div>

                <div class="col-4 col-md-4 ">
                  <i class="far fa-comment-dots text-dark btn btn-light"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
