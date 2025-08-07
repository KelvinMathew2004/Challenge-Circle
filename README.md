# 🎯 Challenge Circle

**Challenge Circle** is a React and Supabase-powered web app for Gen Z thrill-seekers. It's a dynamic forum where users can post challenges, and other users can accept them by placing a "bet".

---

## 🧠 Overview

This application serves as a hub for users to create, view, update, and delete challenges. Built on a modern tech stack using **React** for the frontend and **Supabase** for the backend and database, Challenge Circle offers a seamless and interactive experience. The core functionality revolves around full **CRUD (Create, Read, Update, Delete)** operations for challenges, with a stretch feature that tracks how many users have accepted each challenge.

---

## ✨ Features

### Required Features
- 📖 **View All Challenges:** The homepage displays a feed of all user-submitted challenges.
- ➕ **Create a Challenge:** A dedicated form allows users to easily post new challenges to the forum.
- 🔄 **Update a Challenge:** Users have the ability to edit the details of a challenge after it has been created.
- 🗑️ **Delete a Challenge:** A challenge can be removed from the forum once it's posted.

### Stretch Features
- ⬆️ **Track Bets:** The site keeps a running tally of "bets" for each challenge. When a user clicks the **"Bet"** button, the count is incremented and saved to the Supabase database, showing how many people have taken on the challenge.

---

## 🚦 Routing Details

- `/` – Home page displaying the list of all challenges.
- `/create` – The page containing the form to create a new challenge.
- `/edit/:id` – A page for editing a specific challenge, identified by its unique ID.

All client-side routing is handled by **React Router**.

---

## 🛠️ Built With

- React
- JavaScript (ES6+)
- HTML/CSS
- [Supabase](https://supabase.com/)
- [React Router](https://reactrouter.com/)

---

## 📸 Preview

> [Live Demo](https://challenge-circle.netlify.app/)

- ✅ Home page showing all challenges and their bet counts.
- ✅ A "Create a Challenge" page with a form for new submissions.
- ✅ An "Edit Challenge" page to update existing entries.

---

## 📄 License

    Copyright [2025] [Your Name]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0
