# F1 - smava recruitment tasks for front-end developers

Hello! We are very happy to see that you have reached this challenge! Here are bellow few tasks, that we kindly ask you to solve. First two tasks will be a kind of warm up for you, we hope that you will solve them within minutes. The third task requires some creativity, we are giving you some description, which is very close to the stuff, that we are actually working in smava.

Solutions need to be provided as a bunch of files. The first two may include only one HTML-file per task. For creative task you may want to use some build tools, so we are expecting source code from you but not the minified output because the code quality is also important for us.

We wish you best of luck and you will have a nice time while solving this tasks!


## 1. Fix our sorting function

This is the current implementation of our sort function, which is lacking some to be implemented functionality:

```js
function usersComparator(userA, userB) {
    if(userA.registrationDate !== userB.registrationDate) {
        return userA.registrationDate - userB.registrationDate;
    }
    return userA.requestedAmount - userB.requestedAmount;
}

function sortUsers(users) {
    return users.sort(usersComparator);
}
```

Please extend and / or correct the implementation so that it also respects the `active` flag of our users.
The output of sortUsers should return the passed elements in the following order: `1,2,3,4,5`

```js
sortUsers([
    {id: 2, active: false, registrationDate: new Date(2016, 11, 1), requestedAmount: 10000},
    {id: 1, active: false, registrationDate: new Date(2016, 10, 15), requestedAmount: 5000},
    {id: 3, active: true,  registrationDate: new Date(2016, 10, 14), requestedAmount: 5000},
    {id: 5, active: true,  registrationDate: new Date(2017, 0, 2), requestedAmount: 5000},
    {id: 4, active: true,  registrationDate: new Date(2016, 10, 14), requestedAmount: 5500},
]);
```


## 2. Make a content block collapsible on click

Please enhance the following HTML markup with some Java Script and CSS magic so that the content of the `collapsible__content div` is only displayed with a click on the `collapsible__toggle button`. Another click on the button shall hide the content again.
Please use Java Script only where it can't be avoided and show us some nice animations.

```html
<div class="collapsible">
    <button class="collapsible__toggle">
        Show me the content
    </button>
    <div class="collapsible__content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius ante id mattis tempor. Suspendisse eu nisi dictum, venenatis diam vel, faucibus magna. Sed non purus nibh. Vivamus ultricies non tellus nec pharetra. Proin sollicitudin tincidunt egestas. Sed vitae elementum risus. Sed ac ultrices nisl, eu egestas augue. Donec vel tortor eu justo laoreet eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed venenatis diam non sapien vulputate, sed porttitor nunc egestas. Ut placerat, arcu ut sodales tincidunt, libero ipsum viverra odio, et suscipit leo felis a velit. Quisque sed metus interdum, lacinia massa vitae, ultrices nulla. Aenean finibus tincidunt lobortis. Quisque et mauris nec ex luctus cursus. Phasellus sem tortor, fermentum quis urna ac, suscipit scelerisque mauris.
        </p>
        <p>
            Suspendisse potenti. Nulla vestibulum imperdiet commodo. Ut id tortor pulvinar, sodales lorem at, volutpat neque. Quisque tempor arcu arcu. Vivamus porttitor sit amet metus ultrices ullamcorper. Nulla rutrum cursus aliquet. Praesent sem quam, imperdiet eu mi non, aliquam sagittis purus. Sed interdum non libero nec placerat. Maecenas nec blandit ex, vel eleifend ligula. Aliquam sem massa, congue non massa sit amet, porttitor sollicitudin mauris. Integer lobortis laoreet justo id luctus. Aliquam quis commodo mi, sit amet accumsan ante. Cras in vulputate nisl.
        </p>
    </div>
</div>
```

Here is a Gif with expected animation:

![output](https://cloud.githubusercontent.com/assets/812240/23119300/f25ef3a6-f757-11e6-83f1-8971e7433363.gif)


## 3. Creative: make a registration form

Last but not least we would kindly ask you to show us your ability to create a dynamic form. You are allowed to choose any library or framework that will help you to get the job done, although we would prefer to see you working with Marionette or React.
Please don't spend more than 4 hours on this task. Please make sure that at the end you commented on what you have not managed to finish and please outline how you would solve the remaining work including an estimate of how much time it would have approximately taken you.


### Technical description

1. When a user opens a page he or she sees the following: ![first](https://cloud.githubusercontent.com/assets/812240/23119046/dc0db034-f756-11e6-914f-5991a7483cc4.png)

2. The user should be able to add and remove bank accounts ![second](https://cloud.githubusercontent.com/assets/812240/23119087/080bacb8-f757-11e6-99df-3ee9ba709974.png)

3. The specific input data shall be validated once the user finishes his field input and once again for all data just before the submission of the form to the backend (validation rules - please see bellow). In case of validation errors a
message shall be displayed next to the invalid field. ![third](https://cloud.githubusercontent.com/assets/812240/23119100/13cc82f2-f757-11e6-8570-84040666bcb0.png)

4. When all entered data is valid it should be displayed as a popup message to the user after submission. ![forth](https://cloud.githubusercontent.com/assets/812240/23119112/205d2472-f757-11e6-82b3-b04b564fc073.png)

5. If the user has tried to submit invalid data first and fixed the validation errors afterwards, the whole data set should be validated again on submission.

### Validation rules

* All fields are mandatory

1. **firstName** - should contain only small and capital letters, no numbers, special characters, etc.
1. **lastName** - same as the **firstName**
1. **email** - must be a valid email address
1. **bankAccounts** - must be at least one account
1. **iban** - must be a valid [IBAN](https://en.wikipedia.org/wiki/International_Bank_Account_Number). You may want to use [this library](https://www.npmjs.com/package/iban) for validation.
1. **bankName** - no extra specific requirements, just not be empty.
