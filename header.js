
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

    const headerHTML = `
    <!-- Top Portal Bar -->
    <div class="w-full bg-[#1a1a1a] text-white/90 py-2.5 px-6 flex justify-center items-center gap-8 text-[11px] font-bold tracking-[0.12em] relative z-[60] border-b border-white/5">
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
    <header class="w-full flex justify-center pt-6 px-4 md:px-6 absolute top-10 left-0 z-50 pointer-events-none">
        <nav class="w-full max-w-[1120px] bg-white/80 backdrop-blur-md rounded-full px-8 py-3.5 flex items-center justify-between shadow-sm border border-black/5 pointer-events-auto">
            <!-- Logo -->
            <a href="${base}index.html" class="flex items-center cursor-pointer">
                <img src="${base}logo/birla-logo-new.png" alt="BOMIS Ballari" class="h-12 md:h-14 w-auto">
            </a>

            <!-- Links (Desktop) -->
            <div class="hidden md:flex items-center gap-10">
                <a href="${base}index.html" class="${isHome ? 'text-[#EA580C] font-semibold' : 'text-[#231F20]/70 hover:text-[#EA580C] font-medium'} text-[15px] transition-colors duration-200">Home</a>
                <a href="${base}about.html" class="${isAbout ? 'text-[#EA580C] font-semibold' : 'text-[#231F20]/70 hover:text-[#EA580C] font-medium'} text-[15px] transition-colors duration-200">About Us</a>
                <a href="${base}programs.html" class="${isPrograms ? 'text-[#EA580C] font-semibold' : 'text-[#231F20]/70 hover:text-[#EA580C] font-medium'} text-[15px] transition-colors duration-200">Programs</a>
                <a href="${base}gallery.html" class="${isGallery ? 'text-[#EA580C] font-semibold' : 'text-[#231F20]/70 hover:text-[#EA580C] font-medium'} text-[15px] transition-colors duration-200">Gallery</a>
                <a href="${base}blog.html" class="${isBlogs ? 'text-[#EA580C] font-semibold' : 'text-[#231F20]/70 hover:text-[#EA580C] font-medium'} text-[15px] transition-colors duration-200">Blogs</a>
            </div>

            <!-- Right Side -->
            <div class="flex items-center">
                <a href="${base}contact.html" class="bg-[#111] hover:bg-[#222] text-white font-bold text-[15px] px-7 py-3 rounded-full transition-all duration-300 shadow-md">Contact Us</a>
            </div>
        </nav>
    </header>
    `;

    placeholder.innerHTML = headerHTML;
});
