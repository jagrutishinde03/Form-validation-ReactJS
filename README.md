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

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/react-form-validation.git
   cd react-form-validation
    ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   
3. **Install React Router**
   - If you haven't already installed React Router, you can do so by running:
   ```bash
   npm install react-router-dom
   ```
   
4. **Install Bootstrap**
   - If Bootstrap is not already included in your project, you can add it using npm:   
   ```bash
   npm install bootstrap
   ```

5. **Run the Application**
   ```bash
   npm start
   ```

6. **Open in Browser**
   - Open your browser and navigate to `http://localhost:3000`

## Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- Bootstrap

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

![image](https://github.com/jagrutishinde03/Form-validation-ReactJS/blob/main/public/form.png)
![image](https://github.com/jagrutishinde03/Form-validation-ReactJS/blob/main/public/success.png)

## Credits

- This project was created by me Jagruti Shinde.
- Special thanks to Celebal technologies for the helpful tutorial.
