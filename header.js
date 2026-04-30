
document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;

    const path = window.location.pathname;
    const isSubPage = path.includes('/blogs/') || path.includes('/programs/');
    const base = isSubPage ? '../' : '';

    // Detect active page for nav links
    const isHome = path.endsWith('index.html') || path.endsWith('/');
    const isAbout = path.includes('about.html');
    const isPrograms = path.includes('programs.html') || path.includes('/programs/');
    const isGallery = path.includes('gallery.html');
    const isBlogs = path.includes('blog.html') || path.includes('/blogs/');
    const isEnquiry = path.includes('enquiry.html');

    const headerHTML = `
    <!-- Top Portal Bar -->
    <div class="w-full bg-[#1a1a1a] text-white/90 py-2.5 px-6 flex lg:hidden justify-center items-center gap-8 text-[11px] font-bold tracking-[0.12em] relative z-[60] border-b border-white/5">
        <a href="${base}enquiry.html" class="hover:text-[#e25d2a] transition-colors flex items-center gap-2 uppercase group">
            <img src="${base}logo/birla-logo-new.png" alt="" class="h-3.5 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all">
            Admission Enquiry
        </a>
        <span class="w-[1px] h-3 bg-white/20"></span>
        <a href="${base}parents-login.html" class="hover:text-[#e25d2a] transition-colors uppercase">Parents Login</a>
        <span class="w-[1px] h-3 bg-white/20"></span>
        <a href="${base}staff-login.html" class="hover:text-[#e25d2a] transition-colors uppercase">Staff Login</a>
    </div>

    <!-- Main Navigation Header -->
    <header class="w-full flex justify-center pt-6 px-4 md:px-6 absolute lg:top-0 top-10 left-0 z-50 pointer-events-none">
        <nav class="w-full max-w-[1240px] bg-white/95 backdrop-blur-md rounded-full px-6 md:px-8 py-3 flex items-center justify-between shadow-md border border-black/5 pointer-events-auto">
            <!-- Logo -->
            <a href="${base}index.html" class="flex items-center cursor-pointer shrink-0">
                <img src="${base}logo/birla-logo-new.png" alt="BOMIS Ballari" class="h-10 md:h-14 w-auto">
            </a>

            <!-- Links (Desktop) -->
            <div class="hidden lg:flex items-center gap-7 mx-4">
                <a href="${base}index.html" class="${isHome ? 'text-[#EA580C] font-semibold' : 'text-[#231F20]/70 hover:text-[#EA580C] font-medium'} text-[14px] transition-colors duration-200">Home</a>
                <a href="${base}about.html" class="${isAbout ? 'text-[#EA580C] font-semibold' : 'text-[#231F20]/70 hover:text-[#EA580C] font-medium'} text-[14px] transition-colors duration-200">About Us</a>
                <a href="${base}programs.html" class="${isPrograms ? 'text-[#EA580C] font-semibold' : 'text-[#231F20]/70 hover:text-[#EA580C] font-medium'} text-[14px] transition-colors duration-200">Programs</a>
                <a href="${base}gallery.html" class="${isGallery ? 'text-[#EA580C] font-semibold' : 'text-[#231F20]/70 hover:text-[#EA580C] font-medium'} text-[14px] transition-colors duration-200">Gallery</a>
                <a href="${base}blog.html" class="${isBlogs ? 'text-[#EA580C] font-semibold' : 'text-[#231F20]/70 hover:text-[#EA580C] font-medium'} text-[14px] transition-colors duration-200">Blogs</a>
                <a href="${base}enquiry.html" class="${isEnquiry ? 'text-[#EA580C] font-semibold' : 'text-[#231F20]/70 hover:text-[#EA580C] font-medium'} text-[14px] transition-colors duration-200">Enquiry</a>
                
                <!-- Login Dropdown -->
                <div class="relative group py-2">
                    <button class="flex items-center gap-1.5 text-[#231F20]/70 hover:text-[#EA580C] font-medium text-[14px] transition-colors duration-200 group-hover:text-[#EA580C]">
                        Login
                        <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <!-- Dropdown Menu -->
                    <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-black/5 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <a href="${base}parents-login.html" class="flex items-center px-4 py-2.5 text-[13px] font-semibold text-[#231F20]/80 hover:bg-gray-50 hover:text-[#EA580C] transition-colors">Parents Login</a>
                        <a href="${base}staff-login.html" class="flex items-center px-4 py-2.5 text-[13px] font-semibold text-[#231F20]/80 hover:bg-gray-50 hover:text-[#EA580C] transition-colors">Staff Login</a>
                    </div>
                </div>
            </div>

            <!-- Right Side -->
            <div class="flex items-center gap-4 shrink-0">
                <a href="${base}contact.html" class="hidden md:flex bg-[#EA580C] hover:bg-[#D94E05] text-white font-bold text-[13px] px-6 py-2.5 rounded-full transition-all duration-300 shadow-md whitespace-nowrap">Contact Us</a>
                
                <!-- Hamburger Button -->
                <button id="mobile-menu-btn" class="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-[120] relative">
                    <span class="w-6 h-0.5 bg-black transition-all duration-300 origin-center" id="bar1"></span>
                    <span class="w-6 h-0.5 bg-black transition-all duration-300" id="bar2"></span>
                    <span class="w-6 h-0.5 bg-black transition-all duration-300 origin-center" id="bar3"></span>
                </button>
            </div>
        </nav>
    </header>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu-overlay" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[110] opacity-0 pointer-events-none transition-opacity duration-300">
        <div id="mobile-menu-content" class="absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-white shadow-2xl flex flex-col p-8 pt-12 translate-x-full transition-transform duration-300 ease-in-out">
            <!-- Header inside menu -->
            <div class="flex justify-between items-center mb-10">
                <img src="${base}logo/birla-logo-new.png" alt="Logo" class="h-10 w-auto">
                <button id="close-menu-btn" class="p-2 text-[#231F20]/60 hover:text-black">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>

            <!-- Navigation Links (Mobile) -->
            <nav class="flex flex-col gap-5 overflow-y-auto pb-10">
                <a href="${base}index.html" class="${isHome ? 'text-[#EA580C]' : 'text-[#231F20]/80'} text-[18px] font-bold py-1">Home</a>
                <a href="${base}about.html" class="${isAbout ? 'text-[#EA580C]' : 'text-[#231F20]/80'} text-[18px] font-bold py-1">About Us</a>
                <a href="${base}programs.html" class="${isPrograms ? 'text-[#EA580C]' : 'text-[#231F20]/80'} text-[18px] font-bold py-1">Programs</a>
                <a href="${base}gallery.html" class="${isGallery ? 'text-[#EA580C]' : 'text-[#231F20]/80'} text-[18px] font-bold py-1">Gallery</a>
                <a href="${base}blog.html" class="${isBlogs ? 'text-[#EA580C]' : 'text-[#231F20]/80'} text-[18px] font-bold py-1">Blogs</a>
                <a href="${base}enquiry.html" class="${isEnquiry ? 'text-[#EA580C]' : 'text-[#231F20]/80'} text-[18px] font-bold py-1">Enquiry</a>
                
                <!-- Login Accordion (Mobile) -->
                <div class="flex flex-col">
                    <button id="mobile-login-trigger" class="flex items-center justify-between text-[#231F20]/80 text-[18px] font-bold py-1 group">
                        Login
                        <svg class="w-5 h-5 transition-transform duration-200" id="mobile-login-arrow" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div id="mobile-login-content" class="hidden flex-col gap-4 pl-4 mt-4 mb-2 border-l-2 border-[#EA580C]/20">
                        <a href="${base}parents-login.html" class="text-[#231F20]/70 text-[16px] font-semibold">Parents Login</a>
                        <a href="${base}staff-login.html" class="text-[#231F20]/70 text-[16px] font-semibold">Staff Login</a>
                    </div>
                </div>

                <a href="${base}contact.html" class="text-[#231F20]/80 text-[18px] font-bold py-1">Contact Us</a>
            </nav>

            <!-- Bottom Note -->
            <div class="mt-auto pt-6 border-t border-gray-100">
                <p class="text-[12px] text-[#231F20]/40 font-medium tracking-wide uppercase">Admission Open for 2024-25</p>
            </div>
        </div>
    </div>
    `;

    placeholder.innerHTML = headerHTML;

    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const overlay = document.getElementById('mobile-menu-overlay');
    const content = document.getElementById('mobile-menu-content');
    const body = document.body;

    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');

    // Mobile Login Accordion Logic
    const loginTrigger = document.getElementById('mobile-login-trigger');
    const loginContent = document.getElementById('mobile-login-content');
    const loginArrow = document.getElementById('mobile-login-arrow');

    if (loginTrigger) {
        loginTrigger.addEventListener('click', () => {
            const isHidden = loginContent.classList.contains('hidden');
            if (isHidden) {
                loginContent.classList.remove('hidden');
                loginContent.classList.add('flex');
                loginArrow.style.transform = 'rotate(180deg)';
            } else {
                loginContent.classList.add('hidden');
                loginContent.classList.remove('flex');
                loginArrow.style.transform = '';
            }
        });
    }

    function openMenu() {
        overlay.classList.remove('pointer-events-none', 'opacity-0');
        overlay.classList.add('opacity-100');
        content.classList.remove('translate-x-full');
        body.style.overflow = 'hidden';
        
        // Animate Hamburger to X
        bar1.style.transform = 'translateY(8px) rotate(45deg)';
        bar2.style.opacity = '0';
        bar3.style.transform = 'translateY(-8px) rotate(-45deg)';
    }

    function closeMenu() {
        overlay.classList.add('opacity-0');
        overlay.classList.add('pointer-events-none');
        overlay.classList.remove('opacity-100');
        content.classList.add('translate-x-full');
        body.style.overflow = '';

        // Animate X back to Hamburger
        bar1.style.transform = '';
        bar2.style.opacity = '1';
        bar3.style.transform = '';
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openMenu();
    });
    
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeMenu();
    });

    // Close on link click
    content.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
