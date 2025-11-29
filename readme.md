# StarShine Server Website

This project is the official website for the StarShine Minecraft Server.

## Project Structure

- **index.html**: The entry point of the web application. Defines global styles and imports dependencies via CDN.
- **index.tsx**: The React entry point that renders the App component.
- **App.tsx**: The main layout component that orchestrates the different sections of the website.
- **constants.ts**: Contains all the static data for the site (Navigation links, Team members, Features, Social links). Edit this file to change the content.
- **types.ts**: TypeScript interface definitions for data structures used in the app.
- **metadata.json**: Project metadata config.

## Components (`/components`)

- **Navbar.tsx**: The sticky navigation bar at the top of the page.
- **Hero.tsx**: The large initial "Hero" section with the background image, server IP, and copy button.
- **About.tsx**: Displays the "Server Features" grid (Physical server, Cross-play, etc.).
- **Future.tsx**: Displays the "Future Outlook" section, detailing plans for Survival and RPG modes.
- **Team.tsx**: Displays the management team cards.
- **Footer.tsx**: The site footer with social links and copyright info.

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS (via CDN)
- Lucide React (Icons)
