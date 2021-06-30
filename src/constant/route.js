import Home from './../container/HomePage';
import Blog from './../container/Blog';
import BlogPost from './../container/BlogPost';
import About from './../container/About';
import Contact from './../container/Contact';
import Login from './../container/Login';
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
  {
    path: '/blog/:slug',
    component: ({ match, history }) => (
      <BlogPost match={match} history={history} />
    ),
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
];
