/**
 * TODO this data must coming from server
 */

export const loginForm = {
    header: 'Login',
    list: [
        {
            label: 'Email',
            form: {
                id: 'email',
                type: 'emil',
                placeholder: 'email'
            }
        },
        {
            label: 'Password',
            form: {
                id: 'password',
                type: 'password',
                placeholder: 'password'
            }
        },
        {
            label: 'submit',
            button:{
                id: 'showRegistrationForm',
                text: 'Registration'
            }
        }
    ],
    formId: 'loginForm'
};

export const regForm = {
    header: 'Registration',
    list: [
        {
            label: 'Email address',
            form: {
                id: 'email',
                type: 'email',
                placeholder: 'email@something.com'
            }
        },
        {
            label: 'Password',
            form: {
                id: 'pass',
                type: 'password',
                placeholder: 'safe password'
            }
        },
        {
            label: 'Confirm password',
            form: {
                id: 'cPass',
                type: 'password',
                placeholder: 'safe password, again'
            }
        },
        {
            label: 'Name',
            form: {
                id: 'fName',
                type: 'text',
                placeholder: 'John'
            }
        },
        {
            label: 'Last name',
            form: {
                id: 'lName',
                type: 'text',
                placeholder: 'Smith'
            }
        },
        {
            label: 'submit',
            button:{
                id: 'showLoginForm',
                text: 'Login'
            }
        }
    ],
    formId: 'registrationForm'
};

