import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import style from './Text.module.css';

function mapStateToProps(state){
  return {
    notes: state.note,
  }
}

export const Text = connect(mapStateToProps)(Text_);

function Text_({ dispatch, notes }){
  const match = useRouteMatch();
  const id = Number(match.params.id);

  const [currentNote] = notes.filter(note => note.id === id);
  const [title, setTitle] = useState(currentNote.title);
  const [text, setText] = useState(currentNote.text);

  function handleChange(event){
    event.preventDefault();

    const { value } = event.target;

    if (event.target.name === 'title') {
      setTitle(value);
    }
    if (event.target.name === 'text') {
      setText(value);

      // if (input.selectionStart == input.selectionEnd) {
      //   return; // ничего не выделено
      // }
    
      // let selected = input.value.slice(input.selectionStart, input.selectionEnd);
      // input.setRangeText(`*${selected}*`);
    }
  }

  function handleClick(event){
    event.preventDefault();

    if (id) {
      dispatch({
        type: "EDIT_NOTE",
        title: title,
        text: text,
      });
    }

    dispatch({
      type: "ADD_NOTE",
      title: title,
      text: text,
    });
  }

  function handleClear(){
    setTitle(prev => prev = '');
  }

  return (
    <div className={style.text}>
      <form 
        className={style.textFrom}
        onSubmit={handleClick}
      >
        <label className={style.label}>
          <input 
            type="text"
            name="title"
            placeholder="Title"
            className={style.input}
            onChange={handleChange}
            value={title}
          />
          <span 
            className={`${style.labelClear} ${title ? "show" : "hide"}`}
            onClick={handleClear}
          >&times;</span>
        </label>
        <textarea 
          name="text"
          placeholder="Text"
          className={style.textarea}
          onChange={handleChange}
          value={text}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}