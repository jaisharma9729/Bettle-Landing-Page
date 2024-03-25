const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{

       nav.classList.toggle('show-menu')


       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu');


let slides = document.querySelectorAll('.slider-container');
let index = 0;


function next() {
    slides[index].classList.remove('active');
    index = (index +1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index -1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}



 setInterval(next,5000); 

 const slider1 = document.getElementById("myRange1");
    const output1 = document.getElementById("sliderValue1");

    output1.innerHTML = slider1.value;
    output1.setAttribute('data-value', slider1.value);

    slider1.addEventListener("input", function() {
      output1.innerHTML = this.value;
      output1.setAttribute('data-value', this.value);

      const percent = (this.value - this.min) / (this.max - this.min) * 100;
      this.style.background = `linear-gradient(to right, #8753D4 ${percent}%,  #8753D433 ${percent}%)`;
    });

    const slider2 = document.getElementById("myRange2");
    const output2 = document.getElementById("sliderValue2");

    output2.innerHTML = slider2.value;
    output2.setAttribute('data-value', slider2.value);

    slider2.addEventListener("input", function() {
      output2.innerHTML = this.value;
      output2.setAttribute('data-value', this.value);

      const percent = (this.value - this.min) / (this.max - this.min) * 100;
      this.style.background = `linear-gradient(to right, #8753D4 ${percent}%,  #8753D433 ${percent}%)`;
    });

    document.getElementById('load-more-btn').addEventListener('click', function() {

        const cards = document.querySelectorAll('.custom-card');
        
    
        for (let i = 3; i < cards.length; i++) {
            cards[i].style.display = 'block'; 
        }
    
    
        this.style.display = 'none';
    });

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const divs = document.querySelectorAll('.scroll-div');

window.addEventListener('scroll', () => {
    divs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {

            div.style.opacity = 1;
        } else {

            div.style.opacity = 0;
        }
    });
});

function getresult(){
    var team_member = document.getElementById("team-member").value;
    var network_size = document.getElementById("network-size").value;
    var signals = document.getElementById("signals").value;
    var legitimate_signals = document.getElementById("myRange1").value;
    var unq_hard = document.getElementById("myRange2").value;
    var result = document.getElementById("result").value;
    var result = team_member*network_size*signals*(legitimate_signals/100)*(unq_hard/100);
    document.getElementById("result").value = result;
}
