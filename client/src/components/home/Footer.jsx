import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-white via-green-200/60 to-white mt-40">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
          <a href="#">
            <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
          </a>
          {/* <div>
            <p className="text-slate-800 font-semibold">Product</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Affiliate
                </a>
              </li>
            </ul>
          </div> 
        
          <div>
            <p className="text-slate-800 font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Company
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Community
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Careers
                  <span className="text-xs text-white bg-green-600 rounded-md ml-2 px-2 py-1">
                    We’re hiring!
                  </span>
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  About
                </a>
              </li>
            </ul>
          </div>
        
          <div>
            <p className="text-slate-800 font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>  */}
        </div>

        <div className="flex flex-col items-center text-center gap-2 mx-auto">
  <p className="max-w-60">
    Making every customer feel valued—no matter the size of your
    audience.
  </p>

  <div className="flex items-center justify-center gap-4 mt-3">
    <a href="https://www.instagram.com/_om_chotaliya_?igsh=ZGN3aXNibmlqODNi" target="_blank" rel="noreferrer" aria-label="Instagram">
      {/* Simple, accessible Instagram-style camera icon (stroke-based to match other icons) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-instagram size-5 hover:text-green-500"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor"></circle>
      </svg>
    </a>

    <a href="https://github.com/OmChotaliya" target="_blank" rel="noreferrer" aria-label="GitHub">
      {/* GitHub (Octocat) icon — filled path to match common GitHub mark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="lucide lucide-github size-5 hover:text-green-500"
        aria-hidden="true"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.654 1.649.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.479 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
      </svg>
    </a>

    <a
      href="https://www.linkedin.com/in/om-chotaliya-961871283/"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-linkedin size-5 hover:text-green-500"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>

    <a
      href="https://x.com/OmChotaliya?t=tIvxepZ_DOmCrN8a4rjbjg&s=09"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-twitter size-5 hover:text-green-500"
        aria-hidden="true"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    </a>
  </div>

  <p className="mt-3 text-center">
    © 2025 AI-Resume Builder. All rights reserved.
  </p>
</div>

      </footer>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
    </>
  );
};

export default Footer;
