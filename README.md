## Playwright technical-assessment

## 🚀 Setup & Execution Instructions

## 🔧 Prerequisites

- Node.js v14+
- PostgreSQL running locally

## 📁 Clone the Repository

git clone https://github.com/<your-username>/technical-assessment.git
cd technical-assessment


## 🔧 Install Dependencies

npm install

## 🔐 Configure Environment Variables
Copy the .env.example file to .env:


cp .env.example .env
Edit .env with your PostgreSQL credentials:


PGHOST=localhost
PGUSER=your_user
PGPASSWORD=your_password
PGDATABASE=your_database
PGPORT=5432

## ▶️ Running Tests

## # 🖥UI Automation (Playwright)
npx playwright test
To run on all browsers (Chromium, Firefox, WebKit):
npx playwright test web/ --project=chromium --project=firefox --project=webkit

## # 📡 API Tests (Playwright Request API)

npx playwright test api/

## # 📄 Evidence of Execution
npx playwright show-report
