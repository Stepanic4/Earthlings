const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
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


    addMessage () {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageTx,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageTx = '';
        this._callSubscriber(this._store);
    },
    updateNewMessageText (newText) {
        this._state.dialogsPage.newMessageTx = newText;
        this._callSubscriber(this._state);
    },

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default store;
window.store = store;
//store - OOP
