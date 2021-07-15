import React, { useState, useEffect } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import {
  BsCaretDown,
  BsChevronDoubleDown,
  BsXCircle,
  BsDiamond,
  BsDiamondHalf,
  BsDiamondFill,
} from 'react-icons/bs';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_categories } from './../../../action';
import './style.scss';
import Input from './../../../component/Dashboard/UI/Input';
import ModalForm from './../../../component/Dashboard/UI/Modal';
function AdminCategory(props) {
  // const [checked, SetChecked] = useState({});
  // const [expanded, SetExpanded] = useState({});

  const [AddnewModal, SetAddnewModal] = useState(false);
  const [categoryName, SetcategoryName] = useState('');

  const category = useSelector((state) => state.action.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_categories());
    return () => {};
  }, []);

  const renderCategories = (categories) => {
    let myCategories = [];
    categories.map((category) => {
      myCategories.push(
        <li key={category._id}>
          {category.name}
          {category.children.length > 0 ? (
            <ul> {renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    });
    return myCategories;
  };
  const renderModalForm = () => {
    return (
      <ModalForm
        show={AddnewModal}
        handleClose={() => SetAddnewModal(!AddnewModal)}
        title={`Add new category`}
        handleSave={() => console.log('saved')}
      >
        <Input
          type="text"
          label={`Name`}
          value={categoryName}
          placeholder={`Name category`}
          onChange={(e) => SetcategoryName(e.target.value)}
        />
        <Input
          type="select"
          label="Parent categories"
          onChange={() => console.log('Change Selected')}
        >
          <option value={``}>Select Parent category</option>
          {category?.map((item) => {
            return (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            );
          })}
        </Input>
      </ModalForm>
    );
  };
  return (
    <div className="row" style={{ margin: '0 15px' }}>
      <div className="col-12">
        <div className="btn-group">
          <button
            className="btn btn-primary"
            onClick={() => SetAddnewModal(!AddnewModal)}
          >
            Add new
          </button>
        </div>
      </div>
      <div className="col-12">
        <ul className="dashboard_categories">{renderCategories(category)}</ul>
      </div>
      {renderModalForm()}
    </div>
  );
}

export default AdminCategory;
