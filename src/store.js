const { createStore, combineReducers } = require("redux");

const { notesReducer } = require("./notes.js");

const rootReducer = combineReducers({
  note: notesReducer,
});

const store = createStore(rootReducer);

module.exports.store = store;