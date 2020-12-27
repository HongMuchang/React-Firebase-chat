import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlKgxJVKEWhRAv--hUXIazDOsgCMNfY08",
  authDomain: "react-chat-d0381.firebaseapp.com",
  databaseURL: "https://react-chat-d0381-default-rtdb.firebaseio.com",
  projectId: "react-chat-d0381",
  storageBucket: "react-chat-d0381.appspot.com",
  messagingSenderId: "835932796539",
  appId: "1:835932796539:web:014b57b30f65a5e74554de",
};

// 初期化
firebase.initializeApp(firebaseConfig);
// DB作成
const database = firebase.database();
//参照
const messageRef = database.ref("message");
// 追加
export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
