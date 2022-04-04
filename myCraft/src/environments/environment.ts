// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const firebaseConfig = {
  apiKey: "AIzaSyBJw96vMmhkTonAMJfHLA9LxJZ7I6f0I2E",
  authDomain: "mycraft-demo.firebaseapp.com",
  projectId: "mycraft-demo",
  storageBucket: "mycraft-demo.appspot.com",
  messagingSenderId: "382925946462",
  appId: "1:382925946462:web:84bbb4fb0aac58228f3ecf"
};

export const environment = {
  production: false,

  firebaseConfig,

  apiUrl: 'https://nettuts.hu/jms/pzsofi/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
