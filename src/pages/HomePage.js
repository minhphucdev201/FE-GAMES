// Import CSS trong file JS

// ... rest of your JS code
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./HomePage.css"

const HomePage = () => {
    document.body.innerHTML = `${Header()}
      <section  class="container-xl" >
       <div class="section box-sidebar" >
            <div class=" row gx-5" >
                <div class="main col-7" >

               <!-- top  games -->
                <div class="bestgame " >
                    <p class="bestgame__title" >Top games</p>
                    <div class="box-game" >
                        <div class="row">
                            <div class="col-4">
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
                            <div class="col-4">
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
                            <div class="col-4">
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
                          </div>
                        <div class="row mt-4">
                            <div class="col-4">
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
                            <div class="col-4">
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
                            <div class="col-4">
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
                          </div>
                         <a href=""  class="box-link" >See more</a>
                    </div>
                </div>
                <!-- Recently player -->
                <div class="bestgame " >
                    <p class="bestgame__title mt-4"  >Recently player</p>
                    <div class="box-game" >
                        <div class="row">
                            <div class="col-4">
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
                            <div class="col-4">
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
                            <div class="col-4">
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
                          </div>
                        <div class="row mt-4">
                            <div class="col-4">
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
                            <div class="col-4">
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
                            <div class="col-4">
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
                          </div>
                         <a href=""  class="box-link" >See more</a>
                    </div>
                </div>
                <div class="jump row" >
                    <p  class="jump-title col-3 ">Jump to: </p>
                    <ul class="jump-list col-9 ">
                        <li class="jump-item" ><a href="" class="jump-link">Top games</a></li>
                        <li class="jump-item" ><a href=""  class="jump-link">Recently player</a></li>
                        <li class="jump-item" ><a href=""  class="jump-link">UEH Review</a></li>
                        <li class="jump-item" ><a href=""  class="jump-link">UEH Green</a></li>
                        <li class="jump-item" ><a href=""  class="jump-link">EduGames</a></li>
                    </ul>
                </div>
            </div>
               
                <div class="sidebar  col-5" >
                    <div class="highscore" >
                        <p class="highscore__title" >Top Gamer   </h4>
                            <div class="gamer" >
                                <ul class="gamer-list" >
                                    <li class="gamer-item" >
                                        <div class="gamer-infor" >
                                            <p class="thumbnail-wrranty m-0 " ><img src="../Image/Warranty.png" alt=""></span>
                                            <p class="gamer-username m-0" >Thien Heo</p>
                                            <span class="gamer-score" >Điểm: <b>0411</b></span>
                                        <a href="" class="gamer-game" >UEH Maze   </a>
                                        </div>
                                       
                                        <div class="gamer-thumbnail" > <a href="" class="" ><img src="../Image/8.png" alt=""></a></div>
                                    </li>
                                    <li class="gamer-item" >
                                        <div class="gamer-infor" >
                                            <p class="thumbnail-wrranty m-0 " ><img src="../Image/Warranty.png" alt=""></span>
                                            <p class="gamer-username m-0" >Thien Heo</p>
                                            <span class="gamer-score" >Điểm: <b>0411</b></span>
                                        <a href="" class="gamer-game" >UEH Maze   </a>
                                        </div>
                                       
                                        <div class="gamer-thumbnail" > <a href="" class="" ><img src="../Image/8.png" alt=""></a></div>
                                    </li>
                                    <li class="gamer-item" >
                                        <div class="gamer-infor" >
                                            <p class="thumbnail-wrranty m-0 " ><img src="../Image/Warranty.png" alt=""></span>
                                            <p class="gamer-username m-0" >Thien Heo</p>
                                            <span class="gamer-score" >Điểm: <b>0411</b></span>
                                        <a href="" class="gamer-game" >UEH Maze   </a>
                                        </div>
                                       
                                        <div class="gamer-thumbnail" > <a href="" class="" ><img src="../Image/8.png" alt=""></a></div>
                                    </li>
                                    <li class="gamer-item" >
                                        <div class="gamer-infor" >
                                            <p class="thumbnail-wrranty m-0 " ><img src="../Image/Warranty.png" alt=""></span>
                                            <p class="gamer-username m-0" >Thien Heo</p>
                                            <span class="gamer-score" >Điểm: <b>0411</b></span>
                                        <a href="" class="gamer-game" >UEH Maze   </a>
                                        </div>
                                       
                                        <div class="gamer-thumbnail" > <a href="" class="" ><img src="../Image/8.png" alt=""></a></div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
       </div>

          
        </div>
    </section>
${Footer()}`;

// Initialize Swiper after DOM is ready
const initSwiper = () => {
    const swiper1 = new Swiper("#swiper1", {
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    const swiper2 = new Swiper("#swiper2", {
        slidesPerView: 7,
        spaceBetween: 30,
    });
};

// Call initSwiper when DOM is ready
if (document.readyState === 'complete') {
    initSwiper();
} else {
    window.addEventListener('load', initSwiper);
}
    
};

export default HomePage;