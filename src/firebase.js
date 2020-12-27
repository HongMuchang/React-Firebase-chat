import firebase from "firebase";

//envの読み込み
const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
  REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};

// 初期化
firebase.initializeApp(firebaseConfig);
// DB作成
const database = firebase.database();
//参照
const messageRef = database.ref("message");
// 追加
export const pushMessage = ({
  name,
  text
}) => {
  messageRef.push({
    name,
    text
  });
};
// 取得
export const messagesRef = database.ref('messages');