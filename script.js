window.addEventListener('scroll', reveal);

function reveal(){

    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var height = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < height - revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }

    }
}

document.addEventListener("DOMContentLoaded", function() {
    const skillElements = document.querySelectorAll('.skill-per');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    skillElements.forEach(skill => {
        observer.observe(skill);
    });
});