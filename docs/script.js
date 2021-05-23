var message = `
Hi, my name is Adam. I'm a software developer with expertise in Ruby
    on Rails. I also have experience with front end Javascript frameworks 
    such as Ember and React. I'm passionate about open source software, and in my free time I like
    to contribute to <a class="link-text" href='https://github.com/bundler/bundler/commits?author=ajwann'>Bundler</a>
  and <a class="link-text" href='https://github.com/exercism/ruby/commits?author=ajwann'>Exercism.io</a>.
  I currently live and work in Columbus OH, where I am also active in the
  local Ruby on Rails scene. You can often find me at the 
  <a class="link-text" href='https://www.meetup.com/Mutually-Human-Hack-Night'>Mutually Human Hack Night</a>
  and the <a class="link-text" href='http://columbusrb.com/'>Columbus Ruby Brigade</a>.
<br />
<br />
<a class="link-text" href="mailto:ajwann@ajwann.com">Get in touch</a>
`;

navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
var about = document.getElementById("about");
var github = document.getElementById("github");
var resume = document.getElementById("resume");
var flexParent = github.parentNode;
var infoIconHTML = about.innerHTML;

//vibrate when icon touched
//vibration for 'about' element managed below
github.addEventListener('click', function(e) {
  e.stopPropagation();
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
});
resume.addEventListener('click', function(e) {
  e.stopPropagation();
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
});

//spin icons on page load
document.addEventListener("DOMContentLoaded", function(event) { 
  setTimeout(function() {
    about.classList.add("simulate-hover");
  }, 1000);
  setTimeout(function() {
    github.classList.add("simulate-hover");
  }, 1200);
  setTimeout(function() {
    resume.classList.add("simulate-hover");
  }, 1400);
});

//show about message when about icon clicked
//also manage vibration for 'about' element
about.addEventListener('click', function(e) {
  e.stopPropagation();
  if (about.showingMessage) { return; }
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
  if(aboutTimeout) {
    clearTimeout(aboutTimeout);
  }
  var aboutTimeout = setTimeout(function() {
    // temporarily remove other links from the DOM
    flexParent.removeChild(github);
    flexParent.removeChild(resume);
    // replace the info icon with actual info
    about.innerHTML = 
      '<div class="about-content"><div id="about-content-exit"><i class="fas fa-window-close"></i></div>' + message + '</div>';
    about.showingMessage = true;
    var aboutExit = document.getElementById("about-content-exit");
    aboutExit.addEventListener('click', function(e) {
      e.stopPropagation();
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
      flexParent.appendChild(github);
      flexParent.appendChild(resume);
      about.innerHTML = infoIconHTML;
      about.showingMessage = false;
    })
  }, 1300);
});

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update;
