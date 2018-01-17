
# F1 - smava recruitment tasks for front-end developers

Hello! We are very happy to see that you have reached this challenge! The task requires some creativity, we are giving you some description, which is very close to the stuff, that we are actually working in smava.

Solutions need to be provided as a bunch of files. For this task you may want to use some build tools, so we are expecting source code from you but not the minified output because the **code quality** is also important for us.

We wish you best of luck and hope you will have a nice time while solving this task!

## Make a registration form

We would kindly ask you to show us your ability to create a dynamic form. You are allowed to choose any library or framework that will help you to get the job done, although we would prefer to see you working with React.
Try to not spend more than 3 hours on this task. 

### Technical description

1. When a user opens a page he or she sees the following: ![first](https://user-images.githubusercontent.com/28978937/35049230-9c7774f2-fb9f-11e7-9b26-fcfce23a048e.png)

2. The specific input data shall be validated once the user finishes his field input (onBlur validation) and once again for all data just before the submission of the form to the backend (validation rules - please see bellow). In case of validation errors a
message shall be displayed next to the invalid field. ![second](https://user-images.githubusercontent.com/28978937/35049346-f9fd1410-fb9f-11e7-90fd-6df66d983dc7.png)

3. The validated data should be simultaneously shown below in another component that you have created.

4. After submission a message should be shown (e.g. Congratz! All data is valid) and then be hidden again after 3 seconds!

5. If the user has tried to submit invalid data first and fixed the validation errors afterwards, the whole data set should be validated again on submission.

### Validation rules

* All fields are mandatory (required)

1. **firstName** - should contain only small and capital letters, no numbers, special characters, etc.
1. **lastName** - same as the **firstName**
1. **email** - must be a valid email address
1. **iban** - must be a valid [IBAN](https://en.wikipedia.org/wiki/International_Bank_Account_Number). .

### Hints

You are not forced to use this hints but they will make this task easier for you.

- Use create-react-app-redux
- Use redux-forms
- We care about architecture - make sure your structure is scaleable 
- Your design should be responsive 
- Don't make your files too long. If its too long you have poor architecture
- Make sure your code is of high quality (linting)
- Give us instructions how to start / install (Proper Readme.md)
