<script setup>
import myIntro from './myIntro.vue';
import myTechnology from './myTechnology.vue';
import myAbout from './myAbout.vue';
import myExperience from './myExperience.vue';
import myProjects from './myProjects.vue';
import myContact from './myContact.vue';
import myBlogs from './myBlogs.vue';
import footerView from './footer.vue';
import TechnologySlider from './technology_slider.vue';
// import portfolio from './portfolio.vue';
</script>

<template>
<!-- myIntro Start -->
<myIntro />
<!-- myIntro End -->

<!-- myTechnology Start -->
<myTechnology />
<!-- myTechnology End -->

<!-- myAbout Start -->
<myAbout />
<!-- myAbout End -->

<!-- myExperience Start -->
<myExperience />
<!-- Job myExperience End -->

<!-- Technology slider Start -->
<!-- <TechnologySlider/> -->
<!-- Technology slider End -->

<!-- myProjects Start -->
<!-- <myProjects /> -->
<!-- myProjects End -->

<!-- Portfolio Start -->
<!-- <portfolio/> -->
<!-- Portfolio End -->

<!-- myContact Start -->
<myContact />
<!-- myContact End -->

<!-- Team Start -->
<myBlogs />
<!-- Team End -->

<!-- Footer Start -->
<footerView />
<!-- Footer End -->

<!-- Back to top button -->
<a href="#" class="btn back-to-top"><i class="fa fa-chevron-up"></i></a>
</template>
