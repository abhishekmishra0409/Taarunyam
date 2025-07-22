# Taarunyam

Taarunyam is an interactive web application for showcasing and managing the Taarunyam event, likely a college or cultural festival. The platform provides event details, registration links, information about the organizing institution, and an engaging UI with dynamic effects.

---

## Features

- **Event Listings & Details:** Includes a variety of events (technical, cultural, fun games, etc.) with descriptions, entry fees, prize details, coordinators, and registration links.
- **Modern UI:** Features a responsive design with custom navigation bar and footer, and animated background effects using `react-tsparticles`.
- **About Us & Contact Info:** Information about the host college, contact details, and social media links.
- **Routing:** Uses React Router for seamless navigation between Home, Events, and About Us pages.

---

## Technology Stack

- **Frontend Framework:** React
- **Routing:** react-router-dom
- **Styling:** CSS, custom component styles
- **Particles Animation:** react-tsparticles, tsparticles-slim
- **Build Tool:** Vite (inferred from structure)
- **Assets:** PNG, JPG, GIF images for branding and event visuals

---

## Folder Structure

```
Taarunyam/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── EventsData.js
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── Events.jsx
│   │   └── AboutUs.jsx
│   ├── Component/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Particle.jsx
│   │   ├── Footer.css
│   │   ├── HomeEvent.css
│   │   └── ...
│   └── assets/
│       ├── Logo.png
│       ├── Taarunyam.gif
│       ├── Facebook.png
│       ├── Twitter.png
│       ├── Youtube.png
│       ├── Instagram.png
│       ├── Location.png
│       ├── Mail.png
│       ├── Phone.png
│       └── ... (other event and college images)
├── public/
│   └── index.html
└── ...
```
> **Note:** This structure is based on code search and may be incomplete.  
> See the [full repository on GitHub](https://github.com/abhishekmishra0409/Taarunyam) for all files and assets.

---

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/abhishekmishra0409/Taarunyam.git
   cd Taarunyam
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as shown in your terminal).

---

## Usage

- **Home:** Welcome page with highlights and navigation.
- **Events:** Browse all listed events with details and registration forms.
- **About Us:** Info about Swami Vivekanand College of Engineering, Indore, with social and contact links.

---

## Contributing

Contributions, improvements, and suggestions are welcome!  
Fork the repo and open a pull request.

---

## License

This repository is for educational, demonstration, and event use.

---

**For the latest updates and complete project files, visit the [GitHub repository](https://github.com/abhishekmishra0409/Taarunyam).**
