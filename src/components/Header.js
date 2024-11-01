import "./Header.css"
import Swiper from 'swiper';
import 'swiper/css';
const Header = () => {
    
    return `  <header class="header">
        <div class="row header_top scrolled">
            <div class="logo col-3 ">
                <img src="../Image/Trang/LOGO_MINI.png" alt="">
            </div>
            <div class="navbar col-4">
                <nav class="navbar navbar-expand-lg ">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/introduce" data-navigo>Introduce</a>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown">
                                    <a class=" nav-link btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Games
                                      </a>
                                    <ul class="dropdown-menu">
                                      <li><a class="dropdown-item" href="#">Action</a></li>
                                      <li><a class="dropdown-item" href="#">Another action</a></li>
                                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                  </div>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            <div class="header_right col-5">
                <div class="search_game">
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" placeholder=" Search for games">
                </div>
                <div class="favourites">
                    <span><i class="fa-solid fa-heart" style="color: #FFFFFF;"></i></span>
                </div>
                <div class="profile">
                    <div class="dropdown">
                        <a class=" " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../Image/Trang/Profile.png" style="width: 40px;"  alt="" />
                         
                        </a>
                      
                        <ul class="dropdown-menu" style="margin-top: 30px;">
                          <li><a class="dropdown-item" href="#">Profile</a></li>
                          <li><a class="dropdown-item" href="#">Settings</a></li>
                        </ul>
                      </div>
                </div>
            </div>
        </div>
        <!-- Swiper -->
         <section>
            <div class="banner " >
                <div class="swiper mySwiper container-fluid" id="swiper1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="../Image/Trang/Swiper/Slide1.png">
                        </div>
                        <div class="swiper-slide"><img src="../Image/Trang/Swiper/Slide1.png"></div>
                        <div class="swiper-slide"><img src="../Image/Trang/Swiper/Slide1.png"></div>
                        <div class="swiper-slide"><img src="../Image/Trang/Swiper/Slide1.png"></div>
                        <div class="swiper-slide"><img src="../Image/Trang/Swiper/Slide1.png"></div>
                    </div>
                   
                    <!-- <div class="swiper-pagination"></div> -->
                    <!-- <div class="autoplay-progress">
                        <svg viewBox="0 0 48 48">
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span></span>
                    </div> -->
                </div>
                <div class="play__now" >
                    <p class="play__now-link" >PLAY NOW</p>
                 </div>
                 <div class="collection" >
                    <div class="collection__slideshow"  >
                        <div #swiperRef="" class="swiper2 mySwiper" id="swiper2" style=" overflow: hidden;" >
                            <div class="swiper-wrapper" style="margin-left: 130px;" >
                             
                              <div class="swiper-slide"> 
                                 <div class="item " >
                                <div class="item__img" > 
                                    <img src="../Image/Screenshot 2024-09-23 111111.png" alt="">  </div>
                                <div  class="item__detail row">
                                        <div class="item__text col-6"  >
                                            <p  class="fw-bold fs-6" style="
            margin-bottom: 0;">UEH maze</p>
                                            <p class="fw-lighter" style="
            margin-bottom: 0;">UEH review</p>
                                        </div>
                                        <div class="item__icon col-6" >
                                            <span><i class="fa-solid fa-play fa-2xl" style="color: #FFFFFF;margin-right: 8px;"></i></span>
                                            <span><i class="fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></span>
                                        </div>
                                </div>
                              </div>
                            </div>
                              <div class="swiper-slide"> 
                                 <div class="item " >
                                <div class="item__img" > 
                                    <img src="../Image/Screenshot 2024-09-23 111111.png" alt="">  </div>
                                <div  class="item__detail row">
                                        <div class="item__text col-6"  >
                                            <p  class="fw-bold fs-6" style="
            margin-bottom: 0;">UEH maze</p>
                                            <p class="fw-lighter" style="
            margin-bottom: 0;">UEH review</p>
                                        </div>
                                        <div class="item__icon col-6" >
                                            <span><i class="fa-solid fa-play fa-2xl" style="color: #FFFFFF;margin-right: 8px;"></i></span>
                                            <span><i class="fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></span>
                                        </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide"> 
                                <div class="item " >
                               <div class="item__img" > 
                                   <img src="../Image/15.png" alt="">  </div>
                               <div  class="item__detail row">
                                       <div class="item__text col-6"  >
                                           <p  class="fw-bold fs-6" style="
           margin-bottom: 0;">UEH maze</p>
                                           <p class="fw-lighter" style="
           margin-bottom: 0;">UEH review</p>
                                       </div>
                                       <div class="item__icon col-6" >
                                           <span><i class="fa-solid fa-play fa-2xl" style="color: #FFFFFF;margin-right: 8px;"></i></span>
                                           <span><i class="fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></span>
                                       </div>
                               </div>
                             </div>
                           </div>
                              <div class="swiper-slide"> 
                                 <div class="item " >
                                <div class="item__img" > 
                                    <img src="../Image/Screenshot 2024-09-23 111111.png" alt="">  </div>
                                <div  class="item__detail row">
                                        <div class="item__text col-6"  >
                                            <p  class="fw-bold fs-6" style="
            margin-bottom: 0;">UEH maze</p>
                                            <p class="fw-lighter" style="
            margin-bottom: 0;">UEH review</p>
                                        </div>
                                        <div class="item__icon col-6" >
                                            <span><i class="fa-solid fa-play fa-2xl" style="color: #FFFFFF;margin-right: 8px;"></i></span>
                                            <span><i class="fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></span>
                                        </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide"> 
                                <div class="item " >
                               <div class="item__img" > 
                                   <img src="../Image/15.png" alt="">  </div>
                               <div  class="item__detail row">
                                       <div class="item__text col-6"  >
                                           <p  class="fw-bold fs-6" style="
           margin-bottom: 0;">UEH maze</p>
                                           <p class="fw-lighter" style="
           margin-bottom: 0;">UEH review</p>
                                       </div>
                                       <div class="item__icon col-6" >
                                           <span><i class="fa-solid fa-play fa-2xl" style="color: #FFFFFF;margin-right: 8px;"></i></span>
                                           <span><i class="fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></span>
                                       </div>
                               </div>
                             </div>
                           </div>
                              <div class="swiper-slide"> 
                                 <div class="item " >
                                <div class="item__img" > 
                                    <img src="../Image/Screenshot 2024-09-23 111111.png" alt="">  </div>
                                <div  class="item__detail row">
                                        <div class="item__text col-6"  >
                                            <p  class="fw-bold fs-6" style="
            margin-bottom: 0;">UEH maze</p>
                                            <p class="fw-lighter" style="
            margin-bottom: 0;">UEH review</p>
                                        </div>
                                        <div class="item__icon col-6" >
                                            <span><i class="fa-solid fa-play fa-2xl" style="color: #FFFFFF;margin-right: 8px;"></i></span>
                                            <span><i class="fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></span>
                                        </div>
                                </div>
                              </div>
                            </div>
                              <div class="swiper-slide"> 
                                 <div class="item " >
                                <div class="item__img" > 
                                    <img src="../Image/15.png" alt="">  </div>
                                <div  class="item__detail row">
                                        <div class="item__text col-6"  >
                                            <p  class="fw-bold fs-6" style="
            margin-bottom: 0;">UEH maze</p>
                                            <p class="fw-lighter" style="
            margin-bottom: 0;">UEH review</p>
                                        </div>
                                        <div class="item__icon col-6" >
                                            <span><i class="fa-solid fa-play fa-2xl" style="color: #FFFFFF;margin-right: 8px;"></i></span>
                                            <span><i class="fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></span>
                                        </div>
                                </div>
                              </div>
                            </div>
                              <div class="swiper-slide"> 
                                 <div class="item " >
                                <div class="item__img" > 
                                    <img src="../Image/Screenshot 2024-09-23 111111.png" alt="">  </div>
                                <div  class="item__detail row">
                                        <div class="item__text col-6"  >
                                            <p  class="fw-bold fs-6" style="
            margin-bottom: 0;">UEH maze</p>
                                            <p class="fw-lighter" style="
            margin-bottom: 0;">UEH review</p>
                                        </div>
                                        <div class="item__icon col-6" >
                                            <span><i class="fa-solid fa-play fa-2xl" style="color: #FFFFFF;margin-right: 8px;"></i></span>
                                            <span><i class="fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></span>
                                        </div>
                                </div>
                              </div>
                            </div>
                            
                              <div class="swiper-slide"> 
                                 <div class="item " >
                                <div class="item__img" > 
                                    <img src="../Image/Screenshot 2024-09-23 111111.png" alt="">  </div>
                                <div  class="item__detail row">
                                        <div class="item__text col-6"  >
                                            <p  class="fw-bold fs-6" style="
            margin-bottom: 0;">UEH maze</p>
                                            <p class="fw-lighter" style="
            margin-bottom: 0;">UEH review</p>
                                        </div>
                                        <div class="item__icon col-6" >
                                            <span><i class="fa-solid fa-play fa-2xl" style="color: #FFFFFF;margin-right: 8px;"></i></span>
                                            <span><i class="fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></span>
                                        </div>
                                </div>
                              </div>
                            </div>
                            </div>
                         
                          </div>
                    
                    </div>

                    </div>
                 </div>
            </div>
         </div>
       
    </header>`
}

export default Header;
