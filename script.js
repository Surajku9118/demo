
// Start of JavaScript Coding...

// Pages
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => {
        //document.querySelector('.front-page').style.display = 'block'
        document.querySelector('.login-page').style.display = 'none'
        document.querySelector('.signup-page').style.display = 'none'
    })
})

document.querySelectorAll('.login').forEach(loginBtn => {
    loginBtn.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'none'
        document.querySelector('.login-page').style.display = 'block'
        document.querySelector('.signup-page').style.display = 'none'
    })
})

document.querySelectorAll('.signup').forEach(signupBtn => {
    signupBtn.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'none'
        document.querySelector('.login-page').style.display = 'none'
        document.querySelector('.signup-page').style.display = 'flex'
    })
})
$(document).ready(function(){
    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('articles-container');
    const categoryFilter = document.getElementById('category-filter');
    const newsletterForm = document.getElementById('newsletter-form');

    // Sample news articles (in a real application, this would come from a server)
    const newsArticles = [
        {
            title: "Family Support Program Helps 100 Children Attend College",
            category: "success-stories",
            date: "2024-07-10",
            content: "Our Family Support Program has successfully helped 100 children of fallen service members attend college this year..."
        },
        {
            title: "Recent Donations Fund New Counseling Center",
            category: "donation-impact",
            date: "2024-06-28",
            content: "Thanks to your generous donations, we've opened a new counseling center to provide mental health support to military families..."
        },
        {
            title: "Annual Remembrance Ceremony Next Month",
            category: "events",
            date: "2024-06-15",
            content: "Join us next month for our Annual Remembrance Ceremony honoring fallen service members and their families..."
        },
        {
            title: "New Policy Expands Education Benefits for Spouses",
            category: "policy-updates",
            date: "2024-05-30",
            content: "A new policy has been implemented to expand education benefits for spouses of fallen service members..."
        }
    ];

    // Display all articles initially
    displayArticles(newsArticles);

    // Filter articles when category is changed
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value;
        const filteredArticles = selectedCategory === 'all' 
            ? newsArticles 
            : newsArticles.filter(article => article.category === selectedCategory);
        displayArticles(filteredArticles);
    });

    // Handle newsletter signup
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        this.reset();
    });

    function displayArticles(articles) {
        articlesContainer.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'col-md-6 mb-4';
            articleElement.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${article.category} | ${article.date}</h6>
                        <p class="card-text">${article.content}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            `;
            articlesContainer.appendChild(articleElement);
        });

        document.getElementById('donateButton').addEventListener('click', function() {
            window.location.href = 'file:///C:/Users/91865/Desktop/FinalProject@final1/FinalProject/demo2/src/blood%20donar/donatemoney/donatemoney.html';
        });
    }
});
// End of Pages

// Navigation
// const dropdownItems = document.querySelectorAll('.dropdown-hover')

// if(window.innerWidth < 1000) {
//     const menuIcon = document.querySelector('.menu')
//     const navbar = document.querySelector('.navbar')
    
//     menuIcon.addEventListener('click', () => {
//         navbar.classList.toggle('change')

//         if(!navbar.classList.contains('change')) {
//             document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
//                 dropdown.style.left = '-20rem'
//             })
//         }
//     })

//     document.querySelectorAll('.show-dropdown').forEach(link => {
//         link.addEventListener('click', () => {
//             link.nextElementSibling.style.left = '0'
//         })
//     })

//     document.querySelectorAll('.dropdown-heading-link').forEach(headingLink => {
//         headingLink.addEventListener('click', () => {
//             headingLink.parentElement.parentElement.style.left = '-20rem'
//         })
//     })
// // } else {
// //     dropdownItems.forEach(dropdownItem => {
// //         dropdownItem.addEventListener('mouseover', () => {
// //             dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible'
// //             document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
// //             dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
// //         })
// //         dropdownItem.addEventListener('mouseout', () => {
// //             dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
// //             document.querySelector('.navbar-wrapper').style.background = 'none'
// //             dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
// //         })
// //     })
// // }


// window.addEventListener('resize', () => {
//     window.location.reload()
// })

// // End of Navigation

// // END of JavaScript Coding...

