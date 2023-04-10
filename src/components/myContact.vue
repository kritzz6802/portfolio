<script setup>

</script>

<template>
<div class="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
    <div class="container-fluid">
        <div class="container">
            <div class="row align-items-center">
                <!-- <div class="col-md-4"></div> -->
                <!-- <div class="col-md-8"> -->
                    <div class="contact-form">
                        <div id="success" class="maps">
                            <!-- <h1>maps</h1> -->
                            <section>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.074865575025!2d72.52911231497625!3d23.02102322216282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d05558fc2f%3A0x537ba377311844e7!2sShivranjani%20Cross%20Rd%2C%20Sudarshan%20Colony%2C%20Ambawadi%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1677255786232!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </section>
                        </div>
                        <div class="form_cls">
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="control-group">
                                <input type="text" class="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                <p class="help-block"></p>
                            </div>
                            <div class="control-group">
                                <input type="email" class="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                <p class="help-block"></p>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                <p class="help-block"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p class="help-block"></p>
                            </div>
                            <div>
                                <button class="btn" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                            <div>
                                <button class="btn" type="submit" id="sendMessageButton">
                                    <a href="../../kirti_resume/index.html">
                                    My Resume
                                    </a>
                                    </button>
                            </div>
                        </form>
                    </div>
                    </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</div>
</template>
