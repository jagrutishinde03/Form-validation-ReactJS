# React Form with Validation

This project demonstrates how to create a React form with validation for required fields without using third-party libraries. It also includes functionality to display error messages, disable submission until fields are filled correctly, and show all the filled details on a new route post-successful submission.

## Features

- **Validation for Required Fields:** The form validates fields such as First Name, Last Name, Username, E-mail, Password, Phone Number, Country, City, PAN Number, and Aadhar Number.
- **Error Messages:** Error messages are displayed for each invalid input field.
- **Show/Hide Password:** Password input field includes a toggle button to show or hide the entered password.
- **Dropdowns for Country and City:** Country and City fields are implemented as dropdowns.
- **Submission Handling:** Submission button is disabled until all required fields are filled correctly.
- **Successful Submission:** Upon successful submission, the filled details are displayed on a new route.

## Resources

- [MDN Web Docs: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) - Regular expressions guide for validating inputs.
- [YouTube Tutorial](https://youtu.be/EWfHJI3M0Fs?si=DHrfYCiryE5wQswA) - Tutorial on creating a React form.

## Technologies Used

- React.js
- JavaScript
- HTML/CSS
- Bootstrap

## Installation and Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the project using `npm start`.
5. Open your browser and go to `http://localhost:3000` to view the form.

## Project Structure

```
react-form-validation/
│
├── src/
│   ├── components/
│   │   ├── Form.js
│   │   ├── FormField.js
│   │   ├── PasswordField.js
│   │   ├── PhoneField.js
│   │   └── SelectField.js
│   ├── styles.css
│   └── index.js
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
│
├── package.json
├── README.md
└── ...
```

## Usage

1. Fill in the required fields.
2. Ensure all fields are filled correctly to enable submission.
3. Click the "Submit" button to validate the form.
4. Upon successful submission, the filled details will be displayed on a new route.

## Credits

- This project was created by me Jagruti Shinde.
- Special thanks to Celebal technologies for the helpful tutorial.
