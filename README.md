# Site Health Dashboard

The Site Health Dashboard displays the temperature and moisture data from a single sensor. The current temperature and moister values are displayed in metrics cards along with the minium and maximum values of the displayed measurement period.

Time dependency of the data is displayed in a line graph. The user has the option to display both temperature and moisture at once, or only one of the measurment series.

This app was build as part of a technical assignment during a recruitment process. I was given five hours to complete the assignment. The app was updated afterwards, based on the feedback that I received on the assigment.

<img width="1440" height="794" alt="Screenshot 2026-01-09 at 11 55 49" src="https://github.com/user-attachments/assets/faeb99f7-ceee-4e41-86de-9d5aa569829d" />


## Running the App Locally
### Prerequisites

- Node.js
- npm (comes with Node.js) or yarn

### Installation

1. Clone the repository
```
  git clone https://github.com/btaskinen/site-health-dashboard.git
  cd site-health-dashboard
```

2. Install dependencies
```   
  npm install
```

### Development

1. Start the development server
``` 
  npm run dev
```

2. Open your browser
The app will be available at http://localhost:5173


### End-to-End Testing

End-to-End testing was set up with Cypress. To run the tests use command `npx cypress open`.
