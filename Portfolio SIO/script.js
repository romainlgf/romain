document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling pour les liens de navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gestion du formulaire de contact (exemple simple, sans envoi réel)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche le rechargement de la page

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Ici, tu pourrais envoyer les données à un service backend
            // Pour l'instant, affichons simplement un message dans la console et une alerte
            console.log('Nom:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Merci pour votre message ! Je vous répondrai bientôt.');

            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }
});