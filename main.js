
// Task-1
// console.log("first")
// setTimeout(() => {
//     console.log("second")
// }, 3500);

// console.log("third")


// Task-2
// const number = parseInt(prompt("Enter number"));
// const sum = number + 250
// alert("sum :" + sum);


// function addName() {
//     const myName = "Sakib Khan";
//     localStorage.setItem("name", myName);
// }
// const removeName = () => {
//     localStorage.removeItem("name");
// }

// function addAge() {
//     const age = 24;
//     localStorage.setItem("age", age)
// }

// const removeAge = () => {
//     localStorage.removeItem("age");
// }



// function reset() {
//     localStorage.clear();
// }


// const getInputValue = (id) => {
//     const nameField = document.getElementById(id);
//     const name = nameField.value;
//     nameField.value ;

//     return name;
// }
// const addFullName = () => {
//     const firstName = getInputValue("first-name");
//     const lastName = getInputValue("last-name");
//     setNameToLS(firstName, lastName);
// };


// const setNameToLS = (firstName, lastName) => {
//     const name = {firstName, lastName};
//     const stringifiedName = JSON.stringify(name);
//     localStorage.setItem("fullname", stringifiedName);
// }


// const getTextValue = () => {
//     const text = document.getElementById("count");
//     const numberString = text.innerText;
//     const number = parseInt(numberString);

//     return number;
// }

// let number = getTextValue();
// const counter = () => {
//     number++;
//     const text = document.getElementById("count");
//     text.innerText = number;

//     localStorage.setItem("count", number);
// }




// level-3

const addName = () => {
    const name = getInputValueById("name-field");
    localStorage.setItem("name", name);
};
const deleteName = () => {
    localStorage.removeItem("name");
};


const addEmail = () => {
    const email = getInputValueById("email-field");
    localStorage.setItem("email", email);
};
const deleteEmail = () => {
    localStorage.removeItem("email");
};


const addMessage = () => {
    const message = getInputValueById("message-field");
    localStorage.setItem("message", message);
};
const deleteMessage = () => {
    localStorage.removeItem("message");
};

const resetLocalStorage = () => {
    localStorage.clear();
};



// level-4
const savedUserInfo = () => {
    const savedUser = localStorage.getItem("user");
    let user = {};

    if (savedUser) {
        user = JSON.parse(savedUser);
    }

    return user;
}



const getInputValueById = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = "";
    return inputValue
};

const SendUserInfo = () => {
    const name = getInputValueById("name-field");
    const email = getInputValueById("email-field");
    const message = getInputValueById("message-field");
    const user = { name, email, message }

    const stringifiedUser = JSON.stringify(user);
    localStorage.setItem("user", stringifiedUser);
}