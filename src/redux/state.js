const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY= 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello my friend ))', likesCount: 272},
                {id: 2, message: 'What are you doing ?', likesCount: 843},
                {id: 3, message: 'Fine, working and learning )) ?', likesCount: 358},
                {id: 4, message: 'This is your car ?', likesCount: 48},
                {id: 5, message: 'No way :) ((!!!' , likesCount: 777}
            ],
            newPostText: ''
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
                {id: 4, message: 'My name is Pavel 24'},
                {id: 5, message: 'If you want?'},
                {id: 6, message: 'Little car it bad'},
                {id: 7, message: 'Friends is happy'}
            ],
            newMessageBody: ''
        },
    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newSms;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newSmsBody = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 9, message: newSmsBody});
            this._callSubscriber(this._state);
        }
    },
};

//PROFILE
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
//DIALOGS
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (txBody) => ({type: UPDATE_NEW_MESSAGE_BODY, newSms: txBody});

export default store;
window.store = store;
//store - OOP
