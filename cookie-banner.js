// ARC Subtle Glassmorphic Cookie Consent Banner
(function() {
  if (typeof window === 'undefined') return;
  if (localStorage.getItem('arc_cookie_consent') === 'acknowledged') return;

  function initBanner() {
    const banner = document.createElement('div');
    banner.id = 'arc-cookie-banner';
    banner.className = 'fixed bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-sm z-[999] p-5 rounded-2xl border border-white/15 bg-black/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] text-white text-xs font-body transition-all duration-500 transform translate-y-8 opacity-0';
    banner.style.fontFamily = "'Barlow', sans-serif";
    
    banner.innerHTML = `
      <div class="flex items-start gap-3 mb-3">
        <span class="w-2 h-2 rounded-full bg-[#00f0ff] mt-1.5 shrink-0 shadow-[0_0_8px_#00f0ff]"></span>
        <p class="text-white/80 leading-relaxed">
          We use local storage strictly to preserve your visual preferences and interface states. Read our 
          <a href="privacy.html" class="text-white underline hover:text-[#00f0ff] transition-colors">Privacy Policy</a>.
        </p>
      </div>
      <div class="flex items-center justify-end gap-2">
        <button id="arc-cookie-accept" class="px-4 py-1.5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer text-xs">
          Accept
        </button>
      </div>
    `;

    document.body.appendChild(banner);

    // Fade in
    requestAnimationFrame(() => {
      banner.classList.remove('translate-y-8', 'opacity-0');
    });

    document.getElementById('arc-cookie-accept').addEventListener('click', () => {
      localStorage.setItem('arc_cookie_consent', 'acknowledged');
      banner.classList.add('translate-y-8', 'opacity-0');
      setTimeout(() => banner.remove(), 500);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBanner);
  } else {
    initBanner();
  }
})();
