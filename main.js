/*=============== Active Link =============== */
const linkWork=document.querySelectorAll('.category__btn');

function activeWork(){
    linkWork.forEach((a)=>a.classList.remove('active-work'));
    this.classList.add('active-work');
}
linkWork.forEach((a)=>a.addEventListener('click',activeWork));

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container',{
    selectors: {
        target:'.project__item',
    },
    animation: {
        duration: 300,
    },
});

/* contact form */
emailjs.init("H-L49m2v9v9NxNfug");

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const message = document.getElementById("user-message").value;

    // Send the email using EmailJS
    emailjs.sendForm("service_mk954io", "template_r6tsewt", this)  // Replace with your service and template IDs
        .then(function(response) {
            console.log("Success:", response);
            alert("Your message has been sent!");
        }, function(error) {
            console.log("Error:", error);
            alert("Something went wrong. Please try again.");
        });
});