# Board Game Cafe Website
Welcome to the Board Game Cafe Website project! This is a web application designed to provide an online platform for a board game café.
The website allows users to explore available games, make reservations, and discover upcoming events.
Developed during the Codedex 2024 hackathon.

## Features

- **Browse Board Games**: Users can browse and search for board games available at the café.
- **Make Reservations**: Book tables and time slots online.
- **Events**: Discover upcoming events, tournaments, and game nights hosted by the café.
- **Interactive UI**: User-friendly design and interaction elements powered by modern web technologies.
- **Responsive Design**: The website adapts seamlessly to various screen sizes, from desktops to mobile devices.

## Tech Stack

- **Frontend**: React, Ant Design, Styled-components, Three.js
- **Backend**: Django, Django REST Framework
- **Database**: PostgreSQL
- **Hosting**: (Insert your hosting details here, if applicable)
- **Version Control**: Git & GitHub

## Setup and Installation

### Prerequisites

- Node.js
- Python 3.8+
- PostgreSQL


### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/mintpryan/BoardGameCafeWebsite.git
   ```
2. Navigate to the project directory:
   ```bash
   cd BoardGameCafeWebsite
   ```
3. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
5. Set up the PostgreSQL database:
    Create a PostgreSQL database.
    Configure the DATABASE settings in backend/settings.py with your database details.
6. Apply migrations:
   ```bash
   python manage.py migrate
   ```
7. Start the backend server:
   ```bash
   python manage.py runserver
   ```
8. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```
Now, you can access the website at http://localhost:3000 (frontend) and http://localhost:8000 (backend API).

   
