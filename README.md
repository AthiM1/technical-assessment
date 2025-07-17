## Playwright technical assessment

This repository consists of a demonstration of web automation and API automation:
(JavaScript + Playwright)

## 🚀 Setup & Execution Instructions

### 🔧 Prerequisites

``` 
node -v
```
- Node.js v14+
- PostgreSQL is running locally

### 📁 Clone the Repository

`git clone https://github.com/<AthiM1/technical-assessment.git
cd technical-assessment`

### 🔧 Install Dependencies

```
npm install
```

Install Playwright:

```
npm init playwright@latest
```

Then install the required browsers:

```n
px playwright install
```

### 🔐 Configure Environment Variables

Copy the .env example file to .env:
cp .env.example .env
Edit .env with your PostgreSQL credentials:

PGHOST=localhost
PGUSER=your_user
PGPASSWORD=your_password
PGDATABASE=your_database
PGPORT=5432

### 📁 Project Structure

```
📁 technical assessment/
├── .env                            # Environment variables 
├── .gitignore                      # Files and folders to ignore in version control
├── README.md                       # Setup, usage, and test instructions

├── api/                            # API test suite
│   ├── CreateUserTest.spec.ts
│   ├── GetUsersTest.spec.ts
│   ├── LoginTest.spec.ts
│   ├── UpdateUserTest.spec.ts
│   └── VerifyUserTest.spec.ts

├── web/                            # UI (browser-based) tests
│   ├── PurchaseProductTest.spec.ts
│   └── pages/                      # Page Object Model (POM) classes
│       ├── CartPage.ts
│       ├── ProductsPage.ts
│       └── LoginPage.ts

├── sql/                            # SQL scripts or database helper files
│   └── DatabaseScript.js

├── tests/                          # Shared fixtures, test utils, or global hooks
│   └── (e.g., test-setup.ts, utils.ts, fixtures.ts)

├── playwright.config.ts            # Playwright config (testDir, baseURL, projects, etc.)
├── package.json                    # NPM dependencies and scripts
└── package-lock.json               # Auto-generated dependency lock file
```

### ▶️ Running Tests

### 🖥UI Automation (Playwright)

```
npx playwright test
```

To run on all browsers (Chromium, Firefox, WebKit):

```n
px playwright test web/ --project=chromium --project=firefox --project=webkit
```

### 📡 API Tests (Playwright Request API)

```
npx playwright test api/
```

### 📄 Evidence of Execution

```
npx playwright show-report
```
