const movies = [
    { 
        title: "Dune: Part Two", 
        year: 2024, 
        rating: "★★★★★", 
        image: "https://www.themoviedb.org/t/p/original/28L7YFGnuN24JTInn3GNdUzetBq.jpg",
        isLatest: true
    },
    { 
        title: "Oppenheimer", 
        year: 2023, 
        rating: "★★★★★", 
        image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/oppenheimer-poster.jpg",
        isLatest: true
    },
    { 
        title: "The Batman", 
        year: 2022, 
        rating: "★★★★☆", 
        image: "https://wallpapers.com/images/hd/the-batman-2022-movie-poster-4u7dg02wjiewmyum.jpg",
        isLatest: false
    },
    { 
        title: "Spider-Man: Across the Spider-Verse", 
        year: 2023, 
        rating: "★★★★★", 
        image: "https://preview.redd.it/hi-res-across-the-spider-verse-character-posters-3429-5000-v0-wzhe0vzps71b1.jpg?width=3429&format=pjpg&auto=webp&s=c9d0a444af19c0d0c013aeb238a1720c1590eb5c",
        isLatest: true
    },
    { 
        title: "Top Gun: Maverick", 
        year: 2022, 
        rating: "★★★★★", 
        image: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        isLatest: false
    },
    { 
        title: "Everything Everywhere All at Once", 
        year: 2022, 
        rating: "★★★★★", 
        image: "https://image.tmdb.org/t/p/original/u68AjlvlutfEIcpmbYpKcdi09ut.jpg",
        isLatest: false
    },
    { 
        title: "John Wick: Chapter 4", 
        year: 2023, 
        rating: "★★★★★", 
        image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
        isLatest: true
    },
    { 
        title: "Avatar: The Way of Water", 
        year: 2022, 
        rating: "★★★★☆", 
        image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/avater-the-way-of-water-poster.jpg",
        isLatest: false
    }
];

// Function to populate movie grid
function populateMovieGrid(containerId, filterLatest = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let moviesToShow = movies;

    if (filterLatest) {
        moviesToShow = movies.filter(movie => movie.isLatest);
    }

    container.innerHTML = '';

    moviesToShow.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
            ${movie.isLatest ? '<span class="latest-badge">NEW</span>' : ''}
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">${movie.year}</p>
                <div class="movie-rating">${movie.rating}</div>
            </div>
        `;
        container.appendChild(movieCard);
    });
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Populate movies on pages that need it
    if (document.getElementById('movieGrid')) {
        populateMovieGrid('movieGrid');
    }

    if (document.getElementById('latestMovies')) {
        populateMovieGrid('latestMovies', true);
    }
});

