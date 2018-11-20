// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyAwtbr8tb0aDptBmAAovjQ4W2XpzbElhEU',
    authDomain: 'sctpl-e-learn.firebaseapp.com',
    databaseURL: 'https://sctpl-e-learn.firebaseio.com',
    projectId: 'sctpl-e-learn',
    storageBucket: 'sctpl-e-learn.appspot.com',
    messagingSenderId: '561950887315'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
