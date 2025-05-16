const services = [
  {
    title: "Web Development",
    img: "web-dev.jpg",
    short: "Modern and responsive websites.",
    long: "We build custom websites using HTML, CSS, JavaScript, and modern frameworks like React or Vue.js that adapt seamlessly across devices."
  },
  {
    title: "Mobile App Development",
    img: "mob-app.jpg",
    short: "Android & iOS app solutions.",
    long: "We create mobile applications tailored for both Android and iOS using native and hybrid technologies like Flutter and React Native."
  },
  {
    title: "UI/UX Design",
    img: "uiux.jpg",
    short: "User-friendly and beautiful designs.",
    long: "We design intuitive and appealing interfaces that ensure great user experience and high engagement."
  },
  {
    title: "Graphic Design",
    img: "graphics.jpg",
    short: "Creative brand visuals.",
    long: "Our team crafts eye-catching visuals, logos, posters, brochures and social media creatives to boost your brand presence."
  },
  {
    title: "Digital Marketing",
    img: "digital.jpg",
    short: "Grow your online presence.",
    long: "From SEO to paid ads, we help you reach more customers and increase conversions through strategic digital marketing."
  },
  {
    title: "AI Integration",
    img: "ai.jpg",
    short: "Smart automation tools.",
    long: "We integrate AI models into your workflows — from chatbots to data analysis using Python and machine learning."
  },
  {
    title: "Cloud Services",
    img: "cloud.jpg",
    short: "AWS, Azure, GCP solutions.",
    long: "We deploy and manage scalable cloud solutions for hosting, data storage, CI/CD pipelines, and DevOps automation."
  },
  {
    title: "Cybersecurity",
    img: "cyber.jpg",
    short: "Protect your systems.",
    long: "We ensure your applications and data are secure using encryption, penetration testing, and vulnerability assessments."
  },
  {
    title: "Video Editing",
    img: "video.jpg",
    short: "Professional editing & effects.",
    long: "From social content to promos and reels, we create stunning videos using Premiere Pro, After Effects, and more."
  },
  {
    title: "Content Writing",
    img: "content.jpg",
    short: "Engaging content for all platforms.",
    long: "We write SEO-optimized content, blogs, product descriptions, and scripts tailored to your brand voice."
  },
  {
    title: "E-commerce Development",
    img: "ecommerce.jpg",
    short: "Online store setup.",
    long: "We build secure and scalable e-commerce websites using Shopify, WooCommerce, and custom CMS solutions."
  },
  {
    title: "Software Testing",
    img: "testing.jpg",
    short: "Ensure quality assurance.",
    long: "We test web and mobile apps thoroughly using manual and automated testing tools to eliminate bugs and ensure performance."
  }
];

const slider = document.getElementById("services-slider");
const detailBox = document.getElementById("service-details");

services.forEach(service => {
  const card = document.createElement("div");
  card.className = "service-card";
  card.innerHTML = `
    <img src="${service.img}" alt="${service.title}" />
    <h3>${service.title}</h3>
    <p>${service.short}</p>
    <button onclick="showDetails('${service.title}')">Know More</button>
  `;
  slider.appendChild(card);
});

function showDetails(title) {
  const service = services.find(s => s.title === title);
  detailBox.classList.add("active");
  detailBox.innerHTML = `
    <h2>${service.title}</h2>
    <p>${service.long}</p>
  `;
}

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});
