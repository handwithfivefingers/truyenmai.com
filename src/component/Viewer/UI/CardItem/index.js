import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalForm from '../Modal';
import ReactHtmlParser from 'react-html-parser';
import '../../Style/style.scss';
import { useDispatch } from 'react-redux';
import { BsForwardFill, BsInfo } from 'react-icons/bs';
import { FetchImageBlog } from '../../../../action';
import LoadingScreen from './../../../../helper/LoadingScreen';

function CardItem(props) {
  const [image, Setimage] = useState('');
  const [IsLoading, SetIsLoading] = useState(true);
  const dispatch = useDispatch();
  var img = '';
  useEffect(() => {
    const abortCont = new AbortController();
    if (props.featured_media) {
      SetIsLoading(true);
      dispatch(
        FetchImageBlog(props.featured_media, { signal: abortCont.signal })
      )
        .then((res) => {
          img = res;
          Setimage(() => (image !== img ? img : image));
          SetIsLoading(!IsLoading);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      SetIsLoading(false);
    }
    return () => abortCont.abort();
  }, [props]);
  return (
    <div className={`card-ui`}>
      <div
        className="card-ui-imageContainer"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {IsLoading ? <LoadingScreen /> : ''}
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
        <hr className="dropdown-divider" />
      </div>

      <div className="card-ui-action">
        <ul className="card-ui-block">
          <li>
            <Link className="card-ui-item" to={`/blog/${props.slug}`}>
              Xem thêm <BsForwardFill />
            </Link>
          </li>
        </ul>
        <div className="card-ui-author">
          <BsInfo size="1rem" />
          <span>David Simon</span>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
