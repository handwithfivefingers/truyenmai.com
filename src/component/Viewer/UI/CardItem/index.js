import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalForm from '../Modal';
import ReactHtmlParser from 'react-html-parser';
import '../../Style/style.scss';
import { useDispatch } from 'react-redux';
import { BsForwardFill } from 'react-icons/bs';
import { FetchImageBlog } from '../../../../action';
function CardItem(props) {
  const [show, setShow] = useState(false);
  const [image, Setimage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchImageBlog(props.featured_media)).then((res) => {
      Setimage(res);
    });
  }, [props]);

  return (
    <div className="card-ui">
      <div
        className="card-ui-imageContainer"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="card-ui-cat">
          {/* {props.categories && props.categories.length > 0
            ? props.categories.map((cat, index) => {
                return <span key={index}>{cat}</span>;
              })
            : ''} */}
        </div>
      </div>
      <div className="card-ui-title">
        <h5>
          {props.title.rendered.length
            ? ReactHtmlParser(props.title.rendered)
            : ''}
        </h5>
      </div>
      <div className="card-ui-content">
        {props.excerpt.rendered.length > 150
          ? ReactHtmlParser(props.excerpt.rendered.slice(0, 150).concat(' ...'))
          : ReactHtmlParser(props.excerpt.rendered)}
      </div>
      <div className="card-ui-action">
        <ul className="card-ui-block">
          {/* <li>
            <a className="card-ui-item" onClick={(e) => setShow(true)}>
              Excerpt
            </a>
          </li>*/}
          <li>
            <Link className="card-ui-item" to={`/blog/${props.slug}`}>
              Access <BsForwardFill />
            </Link>
          </li>
        </ul>

        {/* <a className="btn" onClick={() => setEditPostModal(true)}>
          <BiCalendarEdit />
        </a> */}
      </div>
      {/* {EditPost(props)} */}
    </div>
  );
}

export default CardItem;
