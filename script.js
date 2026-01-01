// SWDream Academy - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initSmoothScroll();
    initContactForm();
    initAnimations();
    initMobileMenu();
    initVideoPlayer();
    initPlaylistPlayer();
});

// Navbar Scroll Effect
function initNavbar() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Animated counters removed (statistics were removed from pages)

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Contact Form Handling
function initContactForm() {
    // Your contact form code here
}

// Scroll Animations
function initAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarClose = document.getElementById('sidebarClose');
    
    // Open mobile sidebar
    if (menuToggle && mobileSidebar) {
        menuToggle.addEventListener('click', () => {
            mobileSidebar.classList.add('active');
            if (sidebarOverlay) {
                sidebarOverlay.classList.add('active');
            }
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close mobile sidebar
    if (sidebarClose && mobileSidebar) {
        sidebarClose.addEventListener('click', () => {
            mobileSidebar.classList.remove('active');
            if (sidebarOverlay) {
                sidebarOverlay.classList.remove('active');
            }
            document.body.style.overflow = '';
        });
    }
    
    // Close when clicking overlay
    if (sidebarOverlay && mobileSidebar) {
        sidebarOverlay.addEventListener('click', () => {
            mobileSidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Sidebar dropdown toggle
    const sidebarDropdownToggles = document.querySelectorAll('.sidebar-dropdown-toggle');
    sidebarDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggle.classList.toggle('active');
            const dropdownMenu = toggle.nextElementSibling;
            if (dropdownMenu) {
                dropdownMenu.classList.toggle('active');
            }
        });
    });
    
    // Legacy nav menu toggle
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Video Player Functionality
function initVideoPlayer() {
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const youtubeVideo = document.getElementById('youtubeVideo');
    const videoTitle = document.querySelector('.video-title');
    
    // Default video ID
    let currentVideoId = 'dH7VDdkVeQM';
    let currentLessonTitle = 'مقدمة في الأمن السيبراني';
    
    // Initialize player with first video
    if (youtubeVideo) {
        youtubeVideo.src = `https://www.youtube.com/embed/${currentVideoId}?autoplay=0&rel=0&modestbranding=1`;
        youtubeVideo.classList.add('active');
        if (videoPlaceholder) {
            videoPlaceholder.style.display = 'none';
        }
    }
    
    // Add click event to placeholder
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            youtubeVideo.src = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0&modestbranding=1`;
            youtubeVideo.classList.add('active');
            videoPlaceholder.style.display = 'none';
        });
    }
    
    // Handle lesson clicks
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            const lessonTitle = this.querySelector('.lesson-title')?.textContent || 'الدرس';
            const statusIcon = this.querySelector('.lesson-status i');
            
            // Skip locked lessons
            if (statusIcon && statusIcon.classList.contains('fa-lock')) {
                return;
            }
            
            currentVideoId = videoId;
            currentLessonTitle = lessonTitle;
            
            // Update video
            if (youtubeVideo) {
                youtubeVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
                youtubeVideo.classList.add('active');
            }
            
            if (videoPlaceholder) {
                videoPlaceholder.style.display = 'none';
            }
            
            // Update title
            if (videoTitle) {
                videoTitle.innerHTML = `<i class="fas fa-play-circle video-title-icon"></i>${lessonTitle}`;
            }
            
            // Update active state
            document.querySelectorAll('.lesson-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Playlist Functionality for Fullstack Page
function initPlaylistPlayer() {
    const playlistCards = document.querySelectorAll('.playlist-card');
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const modalTitle = document.getElementById('modalTitle');
    const modalClose = document.getElementById('modalClose');
    
    // Open playlist video
    playlistCards.forEach(card => {
        card.addEventListener('click', function() {
            const playlistUrl = this.getAttribute('data-playlist');
            const title = this.querySelector('h3').textContent;
            
            if (videoFrame) {
                videoFrame.src = playlistUrl + '&autoplay=1';
            }
            
            if (modalTitle) {
                modalTitle.innerHTML = `<i class="fas fa-play-circle"></i> ${title}`;
            }
            
            if (modal && modalOverlay) {
                modal.classList.add('active');
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    if (modalClose && modal && modalOverlay) {
        modalClose.addEventListener('click', closePlaylistModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closePlaylistModal);
    }
    
    function closePlaylistModal() {
        if (modal && modalOverlay && videoFrame) {
            modal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
            videoFrame.src = '';
        }
    }
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closePlaylistModal();
        }
    });
}
