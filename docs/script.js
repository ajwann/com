var message = `
Hi, my name is Adam. I'm a software engineer with expertise in Ruby
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

var github = document.getElementById("github");
var blog = document.getElementById("blog");
var flexParent = github.parentNode;
var about = document.getElementById("about");
var infoIconHTML = about.innerHTML;

about.addEventListener('click', function(e) {
  // temporarily remove other links from the DOM
  flexParent.removeChild(github);
  flexParent.removeChild(blog);
  // replace the info icon with actual info
  about.innerHTML = 
    '<div class="about-content"><div id="about-content-exit"><i class="fas fa-window-close"></i></div>' + message + '</div>';
  
  var aboutExit = document.getElementById("about-content-exit");
  aboutExit.addEventListener('click', function(e) {
  e.stopPropagation();
  flexParent.appendChild(github);
  flexParent.appendChild(blog);
  about.innerHTML = infoIconHTML;
})
});

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update;
