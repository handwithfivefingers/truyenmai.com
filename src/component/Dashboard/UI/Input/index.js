import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function Input(props) {
  switch (props.type) {
    case 'text':
      return (
        <>
          <label>{props.label}</label>
          <input
            type="text"
            className="form-control form-control-sm"
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
        </>
      );
    case 'search':
      return (
        <>
          <label>{props.label}</label>
          <input
            type="search"
            className="form-control form-control-sm"
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
        </>
      );
    case 'file':
      return (
        <>
          <input
            type="file"
            className="form-control form-control-sm"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </>
      );
    case 'select':
      return (
        <select
          className="form-control form-control-sm"
          onChange={props.onChange}
          multiple={props.multiple}
          defaultValue={props.defaultValue}
        >
          {props.children}
        </select>
      );
    case 'editor':
      return (
        <CKEditor
          editor={ClassicEditor}
          data={props.data}
          onChange={(e) => console.log(e)}
        />
      );
  }
}

export default Input;
