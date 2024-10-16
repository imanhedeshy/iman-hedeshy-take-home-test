# Iman Hedeshy Take-Home Test

Hi! This repo contains my take-home test solutions. There’s a bit of everything—backend stuff with Rails, class design in Ruby, and React frontend work. Each section is in its own directory to keep things clean and easy to follow.

## Project Structure

- **rails-backend**: A Rails API for handling the backend tasks.
- **ruby-class-design**: A plain Ruby project for the class design challenge (Animals and Food).
- **react-frontend**: A React app with TypeScript and MUI for the frontend task.

---

## Written Answers

### 1. Why React is Useful

    React is popular and flexible for building user interfaces, especially for SPAs.

    Pros:

    - Component-based: Everything is a reusable component making the code modular.
    - Virtual DOM: It updates the UI efficiently by only updating the parts that need it.
    - Ecosystem: React’s ecosystem is massive (think React Router, Redux, etc.).
    - Built-in Features: It provides tons of useful built-in libraries, utility functions, and hooks which helps a better integrated app.

    Cons:

    - It might get a bit complex in maintanance if you add too many third-party libraries, and packages to the app.

---

### 2. Improving Web App Performance

    When I want to improve web app performance, I usually focus on the following:

    1. Optimizing asset delivery: Compress images and minify CSS/JS, and use lazy loading.

    2. Caching: Use browser caching, and CDNs and CloudFront services.

    3. Database optimization (if working with a database): Indexing the databases to avoid waste of time, and use cahing libraries/packages like Redis.

    4. Front-end improvements: Use lazy loading or Dynamic Imports for components and code splitting. Avoid using unnecessary libraries and packages in the app.

    5. Backend optimizations: Use efficient algorithms, like parallel processing, multi-threading, etc. Use cloud services like load balancers to avoid execive loads on the app.

---

### 3. Mid-Level vs Senior-Level Engineer

    From my personal experience, the main difference between a mid-level and senior-level engineer is that a Mid-level Engineer is a strong developer who is experienced in their tech stack, and mostly focus on coding and developing, they might need help with more complex problems and focus more on short-term tasks.
    On the other hand, a Senior Engineer, can architect systems, making decisions that directly impact the future growths, they mentor others and ensure moving on track and best practices. They will be the future engineering managers which can hugely impact the companies long-term goals.

---

## Installation Instructions

1. Clone the repo:

   ```bash
   git clone https://github.com/imanhedeshy/iman-hedeshy-take-home-test.git
   cd iman-hedeshy-take-home-test
   ```

2. Run the setup script to install all dependencies:

   ```bash
   bash setup.sh
   ```

---

## Running Projects (Challenge Order)

### Class Design (Ruby)

This project contains classes for Cat, Dog, Chicken, and Food. Animals make different noises based on their preferences for food.

**To Run**:

```bash
./run-ruby.sh
```

---

### Backend (Rails API)

A Rails API handling a provider-client model and journal entries.

**To Run**:

```bash
./run-rails.sh
```

---

### Frontend (React)

A to-do list app built with React, TypeScript, and MUI, featuring drag-and-drop functionality and a confetti effect when tasks are completed.

**To Run**:

```bash
./run-react.sh
```

---

## .gitignore

The `.gitignore` excludes:

- `/node_modules/` (React).
- `/log/`, `/tmp/`, and `/storage/` (Rails).
- Sensitive files like `.env` or `config/master.key`.
