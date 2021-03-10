const initialNotesState = [
  {
    id: 1,
    title: 'Text note 01',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 2,
    title: 'Text note 02',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 3,
    title: 'Text note 03',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 4,
    title: 'Text note 04',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 5,
    title: 'Text note 05',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 6,
    title: 'Text note 06',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 7,
    title: 'Text note 04',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 8,
    title: 'Text note 05',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 9,
    title: 'Text note 06',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 10,
    title: 'Text note 06',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 11,
    title: 'Text note 04',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 12,
    title: 'Text note 05',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 13,
    title: 'Text note 06',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
  {
    id: 14,
    title: 'Text note 06',
    text: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',
  },
];

function notesReducer(state = initialNotesState, action){
  if (action.type === 'ADD_NOTE'){
    const { title, text } = action;
    return [...state, { title, text, id: Math.random().toString(16).slice(2) }];
  }

  return state;
}

module.exports.notesReducer = notesReducer;