// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Link, Switch, Route } from './tw-react-router';
import { HomePage, About, UserPage, LoginPage, BlogPage, BlogDetailPage } from './Pages';
import './styles.css';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blogs</Link>
        <Link to='/user'>User</Link>
        <Link to='/login'>Login</Link>
        <Link to='/sth'>Non exist</Link>
      </nav>
      <h1>Router Demo</h1>
      <Route path='/about' children={About} />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/user' component={UserPage} />
        <Route path='/login' children={LoginPage} />
        <Route path='/blog' exact children={BlogPage} />
        <Route path='/blog/:blogId' children={BlogDetailPage} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </Router>
  );
}
