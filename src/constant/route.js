import Home from './../container/HomePage';
import Blog from './../container/Blog';
import BlogPost from './../container/BlogPost';
import About from './../container/About';
import Contact from './../container/Contact';
import Login from './../container/Login';
import Categories from '../container/Categories';
import NotFound from '../container/NotFound';
export const MenuRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
  },
  {
    path: '/blog',
    name: 'Blog',
    exact: false,
  },
  {
    path: '/about',
    name: 'About',
    exact: false,
  },
  {
    path: '/contact',
    name: 'Contact',
    exact: false,
  },
  {
    path: '/login',
    name: 'Login',
    exact: false,
  },
];

export const FrontEndRoutes = [
  {
    path: '/',
    component: () => <Home />,
    exact: true,
  },
  // {
  //   path: '/blog/category/:slug',
  //   component: ({ match }) => <Categories match={match} />,
  //   exact: false,
  // },
  {
    path: '/blog/category',
    component: () => <Categories />,
    exact: false,
  },

  {
    path: '/blog/:slug',
    component: ({match, location,history}) => <BlogPost match={match} location={location} history={history}/>,
    exact: false,
  },
  {
    path: '/blog',
    component: () => <Blog />,
    exact: false,
  },
  
  {
    path: '/about',
    component: () => <About />,
    exact: false,
  },
  {
    path: '/contact',
    component: () => <Contact />,
    exact: false,
  },
  {
    path: '/login',
    component: () => <Login />,
    exact: false,
  },
  {
    path: '',
    component: () => <NotFound />,
    exact: null,
  },
];
