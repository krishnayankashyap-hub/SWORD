SWORD - Strategic Workbench for Organizational Research & Data

Welcome to the official repository for SWORD. I built this platform to serve as the digital headquarters for a modern political consulting firm. The goal was to create something that didn't just look like a standard corporate website, but felt like a piece of high-tech software—professional, secure, and data-driven.

What is this?

SWORD is a Multi-Page Application that I developed to showcase political intelligence capabilities. It’s designed to look and feel like a premium dashboard used by strategists and analysts.

I focused heavily on the User Experience (UX). I wanted visitors to feel like they were entering a secure system, hence the custom preloader and the "glassmorphism" design language I used throughout the interface.

How I Built It (The Tech Stack)

I chose a modern, performance-focused stack to ensure the site is fast and scalable.

React (Vite): I moved away from Create React App and used Vite because it's significantly faster. The hot module replacement made tweaking the animations a breeze.

Tailwind CSS: For styling, I used Tailwind. It allowed me to build complex layouts (like the responsive grid in the dashboard) and custom animations (like the floating cards) without writing messy CSS files.

React Router DOM: Originally, this started as a single landing page. I refactored it into a full multi-page application using React Router so I could have dedicated views for Services, Careers, and the Dashboard without reloading the page.

Lucide React: I used this library for the iconography because it’s clean, lightweight, and professional.

Key Features I Implemented

1. Custom Brand Preloader

I didn't want a boring loading spinner. I coded a custom entrance animation where the letters S-W-O-R-D reveal themselves one by one, followed by the logo and mission statement. It sets the tone immediately.

2. The "Glass" UI

To give it that modern, "tech-forward" vibe, I used semi-transparent backgrounds with background blur (backdrop-blur) on the navbar and cards. It creates a sense of depth and hierarchy.

3. Responsive Dashboard

I built a mock analytics dashboard. Even though it's currently using static data, I structured the code so that connecting it to a real backend API later will be simple—just swapping the data array for a fetch call.

4. Smart Navigation

The navbar is interactive. When you scroll down, it detaches from the top, shrinks, and becomes a floating "pill" to maximize screen real estate. I handled this using React's useEffect to listen for scroll events.

How to Run This Locally

If you want to check out the code or run it on your machine:

Clone the repo:

git clone [https://github.com/krishnayankashyap-hub/SWORD.git](https://github.com/krishnayankashyap-hub/SWORD.git)


Install dependencies:

npm install


Run the server:

npm run dev


Deployment

I deployed the live version using Vercel. I configured it to deploy directly from the main branch, so any updates I push here automatically go live.
https://sword-n3lc0kvwk-krishnayans-projects.vercel.app


Status: v1.0.0 (Public Release)
Developer(Front End): Krishnayan Kashyap Pathak
