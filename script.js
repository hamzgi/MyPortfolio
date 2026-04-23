// ==================== 테마 토글 기능 ====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// 테마 토글 이벤트 리스너
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
});

// ==================== 모바일 메뉴 토글 ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// 햄버거 메뉴 클릭
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 외부 클릭 시 메뉴 닫기
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
