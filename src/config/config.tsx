import { getDatabase } from '@firebase/database';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyBhSSF912sSu-Omf-XoCC8KzM4EbdABScM",
    authDomain: "reactts-7cf8a.firebaseapp.com",
    databaseURL: "https://reactts-7cf8a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "reactts-7cf8a",
    storageBucket: "reactts-7cf8a.appspot.com",
    messagingSenderId: "206873354238",
    appId: "1:206873354238:web:ffac2405f17b110615aaaf"
};

initializeApp(firebaseConfig);

// Firestore database
const db = getFirestore();

export const DeviceRef = collection(db, "Devices");
export const NumberLevelRef = collection(db, "NumberLevel");
export const AccountManagementRef = collection(db, "AccountManagement");
export const RuleManagementRef = collection(db, "RuleManagement");
export const ServiceRef = collection(db, "Service");
export const ReportRef = collection(db, "Reportt");
export const UserLogRef = collection(db, "UserLogs");

// Realtime database
export const dbrealtime = getDatabase(initializeApp(firebaseConfig));
export const auth = getAuth();
// firebaseConfig = {
//   apiKey: "AIzaSyAq236gpS4DDh6wxsY5RT0WYN_43cfNwec",
//   authDomain: "fir-9-b91de.firebaseapp.com",
//   projectId: "fir-9-b91de",
//   storageBucket: "fir-9-b91de.appspot.com",
//   messagingSenderId: "702862673831",
//   appId: "1:702862673831:web:01f9c05ee8b14c4ba7d882"
// };


