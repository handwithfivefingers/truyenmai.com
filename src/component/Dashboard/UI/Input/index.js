import React, { useState, useEffect } from 'react';

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
        >
          <option value="">Default value</option>
          {props.options && props.options.length > 0 ? props.options.map((opt, index) => {
            return (
              <option key={index} value={opt}>
                {opt}
              </option>
            );
          }): ''
        }
        </select>
      );
  }
}

export default Input;
