<script>
 var lastScrollTop = 0;
 let navbar = document.getElementById("navbar");
export default {

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
                    <a href="#project" class="nav-item nav-link">Projects</a>
                    <a href="#contact" class="nav-item nav-link">Contact</a>
                    <a href="../../kirti_resume/index.html" class="nav-item nav-link">Resume</a>
                </div>
            </div>
        </div>
    </div>

</template>

<style>

</style>