<script>
 var lastScrollTop = 0;
 let navbar = document.getElementById("navbar");
export default {
            // window.addEventListener("scroll", function () {
            //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            //     if (scrollTop > lastScrollTop) {
            //         return{top : "-80px"}
            //     } else {
            //         return{top : "0px"}
            //     }
            //     lastScrollTop = scrollTop;
            // })

            methods: {
        scroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    return{top : "-80px"}
                } else {
                    return{top : "0px"}
                }
                lastScrollTop = scrollTop;
        },
    },
}
</script>

<template>
    <!-- <div class="nav" >


<div class="navbar-parent">
    <div class="navbar-leftpart">KIRTI KOYANI</div>
    <div class="navbar">
        <router-link to="/"><a href="#home">Home</a></router-link>
        <router-link to="/about"><a href="#about">About</a></router-link>
        <router-link to="/about"><a href="#about">Projects</a></router-link>
        <router-link to="/about"><a href="#about">Blogs</a></router-link>
        <router-link to="/contact"> <a href="#contact">Contact</a></router-link>


    </div>
    <div class="navbar-rightpart"><button>HIRE ME</button></div>
</div>
</div> -->
<!--
<header class="nav-area" id="navbar">
        <div class=" menu-wrapper ">
            <h3 class="logo"> <a href="#"> Kirti Koyani </a> </h3>
            <nav class="navvv">
                <ul class=" right-nav ">
                    <li><router-link to="/"><a href="#home">Home</a></router-link></li>
                    <li> <router-link to="/about"><a href="#about">About</a></router-link> </li>
                    <li> <router-link to="/about"><a href="#about">Projects</a></router-link> </li>
                    <li> <router-link to="/about"><a href="#about">Blogs</a></router-link> </li>
                    <li> <router-link to="/contact"> <a href="#contact">Contact</a></router-link> </li>
                </ul>
            </nav>
            <div class="navbar-rightpart"><button class="hire_btn">HIRE ME</button></div>
        </div>
    </header> -->
<!-- <header class="nav-area" id="navbar">
        <div class=" menu-wrapper ">
            <h3 class="logo"> <a href="#"> Kirti Koyani </a> </h3>
            <nav class="navvv">
                <ul class="right-nav">
                    <li><a href="#home">Home</a></li>
                    <li> <a href="#about">About</a></li>
                    <li> <a href="#about">Projects</a></li>
                    <li> <a href="#about">Blogs</a> </li>
                    <li> <a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header> -->
    <div class="navbar navbar-expand-lg bg-light navbar-light">
        <div class="container-fluid">
            <p class="navbar-brand">Kirti Koyani</p>

            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav">
                    <a href="#home" class="nav-item nav-link">Home</a>
                    <!-- <a href="#technology" class="nav-item nav-link active">Technology</a> -->
                    <a href="#about" class="nav-item nav-link">About</a>
                    <!-- <a href="#service" class="nav-item nav-link">Service</a> -->
                    <a href="#experience" class="nav-item nav-link">Experience</a>
                    <!-- <a href="#portfolio" class="nav-item nav-link">Portfolio</a> -->
                    <!-- <a href="#price" class="nav-item nav-link">Price</a> -->
                    <!-- <a href="#review" class="nav-item nav-link">Review</a> -->
                    <!-- <a href="#team" class="nav-item nav-link">Team</a> -->
                    <a href="#blog" class="nav-item nav-link">Projects</a>
                    <a href="#contact" class="nav-item nav-link">Contact</a>
                    <a href="../../kirti_resume/index.html" class="nav-item nav-link">Resume</a>
                </div>
            </div>
        </div>
    </div>

</template>

<style>

</style>