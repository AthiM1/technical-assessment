## Playwright technical assessment

This repository consists of a demonstration of web automation and API automation:
(JavaScript + Playwright)

## 🚀 Setup & Execution Instructions

### 🔧 Prerequisites

` node -v`
- Node.js v14+
- PostgreSQL is running locally

### 📁 Clone the Repository

`git clone https://github.com/<AthiM1/technical-assessment.git
cd technical-assessment`

### 🔧 Install Dependencies

`npm install`

Install Playwright:

`npm install -D @playwright/test`

Then install the required browsers:

`npx playwright install`

### 🔐 Configure Environment Variables

Copy the .env example file to .env:
cp .env.example .env
Edit .env with your PostgreSQL credentials:

PGHOST=localhost
PGUSER=your_user
PGPASSWORD=your_password
PGDATABASE=your_database
PGPORT=5432

### ▶️ Running Tests

### 🖥UI Automation (Playwright)

`npx playwright test`

To run on all browsers (Chromium, Firefox, WebKit):

`npx playwright test web/ --project=chromium --project=firefox --project=webkit`

### 📡 API Tests (Playwright Request API)

`npx playwright test api/`

### 📄 Evidence of Execution

`npx playwright show-report`
