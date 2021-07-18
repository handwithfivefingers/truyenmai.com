import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBlogPost } from '../../../action';
import UserContext from '../../../helper/Context';

import '../Style/style.scss';
function Pagination(props) {
  const pagi = useSelector((state) => state.blog.totalpage);
  const { pagination, SetPagi } = useContext(UserContext);
  const [perpage, Setperpage] = useState(9);
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
                onClick={() => fetchPostperPage({ perpage, page: item })}
              >
                {item}
              </a>
            </li>
          );
        });
      }
      //  pagiarr

      return xhtml;
    }
  };
  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const fetchPostperPage = ({ perpage, page: item }) => {
    SetPagi(item);
    dispatch(FetchBlogPost({ perpage, page: item }));
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
