# Hospital_API
An Hospital API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of  COVID-19 patients made using Node.Js & MongoDB.

## Installation
To install Hospital API, please follow these steps:

- Clone this repository using the following command:
```
$ git clone https://github.com/Shatarupa-Barman/Hospital_API.git
```
- Install the required dependencies using the following command:
```
$ npm install 
```
- Start the application using the following command:
```
$ npm start 
```
- Open the application in your web browser by visiting the following URL:
```
$ http://localhost:8000 
```

## API Reference
HospitalAPI provides a simple API for handling doctor and patient related data. The API supports the following endpoints:


1 . **Register a Doctor:** `[POST]: /doctors/register`  
2 . **Login for Doctor:** `[POST]: /doctors/login`  
3 . **Register a patient:** `[POST]: /patients/register`  
4 . **Create Patient report:** `[POST]: /patients/:id/  create_report`  
5 . **Fetch All Reports of a Patient** `[GET]: /patients/:id/all_reports`  
6 . **Fetch All Reports Based on a Status:** `[GET]: /reports/:status`  



## Folder Structure
```
Hospital_API/
│
├── config/
│ ├── mongoose.js
│ ├── passport-jwt-strategy.js
│
├── controllers/
│ ├── doctors_Controller.js
│ ├── patients_Controller.js
│ ├── reports_Controller.js
│
├── models/
│ ├── doctor.js
│ ├── patient.js
│ ├── report.js
│
├── routes/
│ ├── doctors.js
│ ├── index.js
│ ├── patients.js
│ ├── reports.js
│
├── .gitignore
├── .node-version
├── README.md
├── index.js
├── package-lock.json
└── package.json

```


##  Demo :-

- Git Repository link :  https://github.com/Shatarupa-Barman/Hospital_API
- Hosted Link :



