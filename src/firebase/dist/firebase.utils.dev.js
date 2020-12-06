"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.signInWithGoogle = exports.firestore = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  apiKey: "AIzaSyAQu3DLV6g4NiALmR6wQL6JVj9lmJpzXUM",
  authDomain: "crown-shopping-store.firebaseapp.com",
  projectId: "crown-shopping-store",
  storageBucket: "crown-shopping-store.appspot.com",
  messagingSenderId: "393834933377",
  appId: "1:393834933377:web:d4b3f61468304cab983180",
  measurementId: "G-BMSPQ7J56R"
};

_app["default"].initializeApp(config);

var auth = _app["default"].auth();

exports.auth = auth;

var firestore = _app["default"].firestore();

exports.firestore = firestore;
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

var signInWithGoogle = function signInWithGoogle() {
  return auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;
var _default = _app["default"];
exports["default"] = _default;