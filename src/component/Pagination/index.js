import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBlogPost } from '../../action';

function Pagination(props) {
  const pagi = useSelector((state) => state.blog.totalpage);
  const [isActive, setActive] = useState('1');

  const dispatch = useDispatch();
  
  useEffect(() => {
    renderPagination();
  }, []);

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
              className={`page-item ${item == isActive ? 'active' : ''}`}
            >
              <a
                className="page-link"
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
    setActive(page);
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
