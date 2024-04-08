import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hello my friend ))', likesCount: 22},
            {id: 2, message: 'What are you doing ?', likesCount: 3},
            {id: 3, message: 'Fine, working and learning )) ?', likesCount: 38},
            {id: 4, message: 'This is your car ?', likesCount: 14},
            {id: 5, message: 'No way :) ((!!!' , likesCount: 777}
        ],
        newPostText: 'it-socialAuto my state.js'
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Lena'},
            {id: 3, name: 'Arnold'},
            {id: 4, name: 'Michal'},
            {id: 5, name: 'Sara'},
            {id: 6, name: 'Ura'},
            {id: 7, name: 'Jan'}
        ],
        messages: [
            {id: 1, message: 'Hello my baby'},
            {id: 2, message: 'How are you ?'},
            {id: 3, message: 'Everything is ok'},
            {id: 4, message: 'My name is Petr'},
            {id: 5, message: 'If you want?'},
            {id: 6, message: 'Little car'},
            {id: 7, message: 'Friends is happy'}
        ],
        newMessageTx: 'Hello friends in my dialogs'
    },
};

window.state = state;

export let addPost = () => {
    let newPost = {
      id: 6,
      message: state.profilePage.newPostText,
      likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageTx,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageTx = '';
    rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageTx = newText;
    rerenderEntireTree(state);
};

export default state;
