import React from 'react';
import style from './Header.module.css';
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    notes: state.note
  }
}

export const Header = connect(mapStateToProps)(Header_);

function Header_({ notes }){
  const numberOfNotes = notes.length;
  return (
    <header>
      <div className={style.headerChild}>
        <h1 className={style.title}>Notes <sup>{numberOfNotes}</sup></h1>
        <h2 className={style.settingsTitle}>Settings</h2>
      </div>
    </header>
  )
}