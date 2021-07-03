import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBlogPost } from '../../action';
import UserContext from '../../helper/Context';

import './style.scss';
function Pagination(props) {
  const pagi = useSelector((state) => state.blog.totalpage);
  const { pagination, SetPagi } = useContext(UserContext);
  
  const dispatch = useDispatch();
  const renderPagination = () => {
    let pagiarr = [];
    let xhtml = '';
    if (pagi > 0) {
      for (let i = 1; i <= pagi; i++) {
        pagiarr.push(i);
      }
      if (pagiarr.length > 0) {
        xhtml = pagiarr.map((item, index) => {
          return (
            <li
              key={index}
              className={`pagi-item ${item == pagination ? 'active' : ''}`}
            >
              <a
                className="pagi-link"
                href="#"
                onClick={() => fetchPostperPage(item)}
              >
                {item}
              </a>
            </li>
          );
        });
      }

      return xhtml;
    }
  };
  const fetchPostperPage = (page) => {
    SetPagi(page);
    dispatch(FetchBlogPost(page));
  };
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {renderPagination()}
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
