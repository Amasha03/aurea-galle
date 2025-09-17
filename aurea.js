 function togglePolicy(id, element) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === "block" ? "none" : "block";
    element.classList.toggle("active");
}

 const sections = document.querySelectorAll('.policy');

  window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerPoint) {
        section.classList.add('visible');
      }
    });
  });

 
  
  /*ROOM POPUPS*/

  function showPopup(id) {
  // Optional: Close other open popups first
  document.querySelectorAll('.popup').forEach(popup => {
    popup.style.display = 'none';
  });

  // Show the selected popup
  const popup = document.getElementById(id);
  if (popup) {
    popup.style.display = 'flex';
  }
}

function closePopup(id) {
  const popup = document.getElementById(id);
  if (popup) {
    popup.style.display = 'none';
  }
}

// Close popup when clicking outside the popup box
window.onclick = function (e) {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
};

/*GUEST SLIDESHOW*/
/*
let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
  }

  function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
  }

  // Auto show first slide
  showSlide(slideIndex);
  */


let slideIndices = [0, 0]; // one index for each slideshow

showSlides(0, 0); // init first slideshow
showSlides(0, 1); // init second slideshow

function changeSlide(n, slideshow) {
  showSlides(slideIndices[slideshow] += n, slideshow);
}

function showSlides(n, slideshow) {
  let containers = document.getElementsByClassName("slideshow-container");
  let slides = containers[slideshow].getElementsByClassName("slide");

  if (n >= slides.length) { slideIndices[slideshow] = 0; }
  if (n < 0) { slideIndices[slideshow] = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndices[slideshow]].style.display = "block";
}

// Optional: auto-play both slideshows
setInterval(() => changeSlide(1, 0), 10000); // slideshow 0
setInterval(() => changeSlide(1, 1), 10000); // slideshow 1


/*--------------REVIEWS-------------*/

// Example reviews
let reviews = [
    {name: "GAUTHAM", country: "india", rating: 5, text: "The property is about 3 km from the bus station & is placed in a very calm place. The beach is also at a walkable distance. The house in itself is quite beautiful, which is an eclectic mixture of both traditional srilankan & modern aesthetics.<br>The rooms are spacious & clean, also there's a cute little garden outside the house that one can go sit if the weather is nice. The house host makes amazing tea and he made me Chai so many times. Whenever I had some request, he always made sure it was fulfilled quickly. He's very kind and hospitable, & he also helped me with the information that I needed around Galle & Colombo <br>I recommend everyone this place if you are ever in Galle :)"},
    {name: "ANURANGA", country: "UK", rating: 5, text: "The place is very conveniently located. The host was very attentive to all our requests. You could order meals for a reasonable price and they were very good. Clear communication from the point of booking until checkout. Highly recommend."},
    {name: "SARAH", country: "sri lanka", rating: 5, text: "I stayed here for a day, and the hotel was easy to access. There was a spacious garden, a comfortable bed, and the washrooms were very clean. I was completely satisfied with my stay."},
    {name: "MIKI", country: "spain", rating: 4, text: "Good!"},
    {name: "RUSHANI DAYARATHNE", country: "sri Lanka", rating: 5, text: "Loved our stay. comfy, clean, and super relaxing. Perfect spot for a Galle trip!"},
    {name: "DINUKA RANASINGHE", country:"sri lanka", rating: 4, text:"Decent place to stay Rooms are very clean. Perfect for a family or friends group"},
    {name: "DANNY", country: "luxembourg", rating:5, text:"It was my first time traveling to Srilanka and I was astonished with the quality of the property when compared to the prices. I stayed in Aurea with couple of my friends and we had a great time there because of the surrounding and the location where the Aurea situated in.Many tourist attractions were very close to the property and because of that we had plenty of time to see the attractions. I would highly recommend if you are traveling to Srilanka specially Galle."},
    {name: "PAMODA", country: "sri lanka", rating:5, text:"I spend my time safely and happily"},
    {name: "DILEEPA NILUMINDA", country: "sri lanka", rating:5, text:"Comfortable Place and very affordable charges"},
    {name: "PRASANNA", country: "sri lanka", rating:5, text:"Exceptional"},
    {name: "YEHENI DE SILVA", country:"sri lanka", rating:5, text: "Had an amazing stay at Aurea Galle. The peaceful environment was perfect for a relaxing getaway. The rooms were clean and well-maintained. The friendly owner went out of his way to make us feel welcome, adding a personal touch to the experience. Highly recommended for anyone looking for tranquility and warm hospitality."},
    {name: "RASHMIKA", country:"sri lanka", rating:5, text:"Great stay. Clean, comfortable, and totally worth the money. Highly recommend."},
    {name: "MUDITHA PRAMOD", country:"sri lanka", rating:5, text: "I had an amazing stay at Aurea’s ! The rooms were spotless, and the surrounding was quiet and safe. I felt right at home and enjoyed every moment. Highly recommend to anyone looking for a cozy and clean place to stay. If you are looking for a stay near Galle, I would highly recommend Aurea where you can easily access to the most of the tourist destinations as well."}

  
  ];

// Convert rating number to stars
function getStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Show only first 3 reviews on main page
function renderReviews() {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = "";
    reviews.slice(0, 3).forEach(r => {
        const div = document.createElement('div');
        div.classList.add('review');
        div.innerHTML = `<p><strong>${r.name}</strong> (${r.country}) - 
                         <span class="stars">${getStars(r.rating)}</span></p>
                         <p>${r.text}</p>`;
        reviewsContainer.appendChild(div);
    });

    // Show "More" button only if there are extra reviews
    document.getElementById('moreBtn').style.display = (reviews.length > 3) ? 'block' : 'none';
}
renderReviews();

// Open popup with all reviews
document.getElementById('moreBtn').addEventListener('click', () => {
    const allReviewsContainer = document.getElementById('allReviews');
    allReviewsContainer.innerHTML = "";
    reviews.forEach(r => {
        const div = document.createElement('div');
        div.classList.add('review');
        div.innerHTML = `<p><strong>${r.name}</strong> (${r.country}) - 
                         <span class="stars">${getStars(r.rating)}</span></p>
                         <p>${r.text}</p>`;
        allReviewsContainer.appendChild(div);
    });
    document.getElementById('popup').style.display = 'flex';
});

// Close popup
document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});
