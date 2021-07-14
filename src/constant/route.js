import Home from './../container/Viewer/HomePage';
import Blog from './../container/Viewer/Blog';
import BlogPost from './../container/Viewer/BlogPost';
import About from './../container/Viewer/About';
import Contact from './../container/Viewer/Contact';
import Login from './../container/Viewer/Login';
import Categories from '../container/Viewer/Categories';

import AdminHomepage from './../container/Dashboard/Homepage';
import AdminPages from './../container/Dashboard/Pages';
import AdminPosts from './../container/Dashboard/Posts';
import AdminCategory from './../container/Dashboard/Category';
import AdminContact from './../container/Dashboard/Contact';
import ActionPage from '../container/Dashboard/ActionPage';
import SearchPage from '../container/Viewer/SearchPage';
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
export const AdminRoutes = [
  {
    path: '/dashboard',
    exact: true,
    component: () => <AdminHomepage />,
  },
  {
    path: '/dashboard/pages',
    component: () => <AdminPages />,
    exact: false,
  },
  {
    path: '/dashboard/posts/:slug',
    component: () => <ActionPage />,
    exact: false,
  },
  {
    path: '/dashboard/posts',
    component: () => <AdminPosts />,
    exact: false,
  },
  {
    path: '/dashboard/category',
    component: () => <AdminCategory />,
    exact: false,
  },
  {
    path: '/dashboard/contact',
    component: () => <AdminContact />,
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
    path: '/blog/category/:slug',
    component: () => <Categories />,
    exact: false,
  },
  {
    path: '/blog/category',
    component: () => <Categories />,
    exact: false,
  },

  {
    path: '/blog/:slug',
    component: () => <BlogPost />,
    exact: false,
  },
  {
    path: '/blog',
    component: () => <Blog />,
    exact: false,
  },
  {
    path: '/search',
    component: () => <SearchPage />,
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
