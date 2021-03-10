import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './TextList.module.css';
import {ReactComponent as Add} from "./images/add.svg";

function mapStateToProps(state){
  return {
    notes: state.note,
  }
}

export const TextList = connect(mapStateToProps)(TextList_);

export function TextList_({ notes }){
  return (
    <div className={style.notesWrap}>
      <div className={style.notes}>
        <Link 
          className={style.note}
          to={`/new`}
        >
          <Add />
          <span>Create</span>
        </Link>

        {notes.map(note => {
          return (
            <Link 
              key={note.id}
              className={style.note}
              to={`/note/${note.id}`}
            >
              <span>{note.title}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}