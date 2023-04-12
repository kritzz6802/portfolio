<template>
    <!-- <div class="about">
        <div class='my-profession-div'>
            <div class="about-card">
                <div class="card-lpart">
                    <h1>About</h1>
                    <div class="img-div">
                        <img class="about-img" src="../assets/img_low.png" alt="">
                    </div>
                    <div class="icons">

                        <h2><img src="../assets/git2.svg" alt=""></h2>
                        <h1><img src="../assets/linkedin2.svg" alt=""></h1>
                    </div>

                </div>
                <div class="card-rpart">
                    <h1>I am Kirti Koyani....<br> Juniour Front-End Developer</h1>
                </div>
            </div>
            <div class="round">
                jd
            </div>
        </div>
        <div class="round2">
        </div>
        <h1>My Skills</h1>

        <swiper :spaceBetween="30" :slidesPerView="4" :slidesPerGroupSkip="0" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" :swiperOption="{
          notNextTick: true,
          loop: true,
          initialSlide: 0
        }" :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }" :pagination="{
          clickable: true,
        }" :scrollbar="true" :modules="modules" class="mySwiper">
            <swiper-slide>
                <img src="../assets/skill_img/html.png" alt="">
            </swiper-slide>
            <swiper-slide> <img src="../assets/skill_img/css.png" alt=""></swiper-slide>
            <swiper-slide> <img src="../assets/skill_img/js.png" alt=""></swiper-slide>
            <swiper-slide> <img src="../assets/skill_img/node.png" alt=""></swiper-slide>
            <swiper-slide> <img src="../assets/skill_img/bootstrap.png" alt=""></swiper-slide>
            <swiper-slide> <img src="../assets/skill_img/sass.webp" alt=""></swiper-slide>
            <swiper-slide> <img src="../assets/skill_img/vue.png" alt=""></swiper-slide>
            <swiper-slide> <img src="../assets/skill_img/mongodb.png" alt=""></swiper-slide>
            <swiper-slide> <img src="../assets/skill_img/git.png" alt=""></swiper-slide>
        </swiper>

    </div> -->

    <div class="banner wow zoomIn" data-wow-delay="0.1s" id="about">
        <div class="container">
            <div class="section-header text-center">
                <p>About Me</p>
                <h2>Professional Summary</h2>
            </div>
            <div class="container banner-text">
                <p>
                    I'm Kirti Koyani. I am Frontend Devloper open to work on java script fremeworks.
                    I had a start-up called "MAKE YOUR
                    MARK" under government's ssip program. I
                    am seek an opportunity to prove my
                    technical skills.As a Devloper my other strength is Leadership & Team Work.
                </p>
                <a href="#contact" class="btn">Contact Me</a>
            </div>
        </div>
    </div>

    <div class="about wow fadeInUp" data-wow-delay="0.1s">
            <div class="container-fluid">
                <div class="row align-items-center">

                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="section-header text-left">
                                <p>Learn About Me</p>
                                <h2>Progress Bar</h2>
                            </div>
                            <!-- <div class="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida
                                </p>
                            </div> -->
                            <div class="skills">
                                <div class="skill-name">
                                    <p>Html, Css, Js</p>
                                    <p>80%</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width:80%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="skill-name">
                                    <p>Vue Js</p>
                                    <p>75%</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="skill-name">
                                    <p>React Js</p>
                                    <p>70%</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width:70%" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="skill-name">
                                    <p>Node Js</p>
                                    <p>67%</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width:67%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="skill-name">
                                    <p>Express Js</p>
                                    <p>63%</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width:63%" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="skill-name">
                                    <p>Mongodb</p>
                                    <p>55%</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width:55%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <a class="btn" href="#contact">Hire Me</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-img">
                            <img src="../assets/girl5.avif" alt="Image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
    // Import Swiper Vue.js components
    import {
        Swiper,
        SwiperSlide
    } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/pagination';

    import '../assets/style.css';

    // import required modules
    import {
        Autoplay,
        Pagination,
        Navigation
    } from 'swiper';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [Autoplay, Pagination, Navigation],
            };
        },
    };
    </script>
