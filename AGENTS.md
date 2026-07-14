# AGENTS.md

## Project Overview

Greenfield MERN e-commerce app for a luxury brand rental business. No code exists yet — only the README (requirements) and empty directory scaffolding.

## Tech Stack (from README)

- **Frontend:** Vanilla HTML/CSS/JS (DOM manipulation, NOT React)
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose expected)

## Directory Layout

```
apps/
  api/        ← Express backend (.env placeholder exists, empty)
  web/        ← Static frontend (empty)
```

No `package.json`, no dependencies, no config files exist yet.

## Database Schema Source

The database design lives outside this repo at:
`C:\Users\acer\software-project\jsd13\week-02\first-meet-dbs\my-ecommerce-project`

Collections: customers, products, rentals, payments, condition_log, maintenance, loyalty_points, resale, retailers. Read that folder before building any models.

## Key Requirements (from README)

- Login page with customer vs admin role separation
- Homepage/dashboard showing product catalog (luxury style)
- Search by brand/model, filter by category and price range
- Availability calendar before booking
- Hero banner images from Unsplash (query: "luxury bag" or "designer fashion")
- Mobile-responsive product cards

## Setup Steps

`apps/api/.env` exists but is empty. Populate with MongoDB connection string before running.
`.gitignore` is also empty — add `node_modules/`, `.env`, etc. before committing dependencies.

## Commands

No scripts exist yet. Once initialized, typical commands will be:
```
# After npm init and dependency install in apps/api:
npm start          # or node index.js
npm run dev         # if nodemon is added

# After npm init in apps/web:
# Static files served by Express or a simple HTTP server
```

No lint, typecheck, test, or build tooling is configured yet.
