import './pages.css';
import { NavLink } from 'react-router-dom';


function Homepage() {
  return (
    <div>
      <div className='navbar'>
        <img className='logo' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/92fe9a37853461.574e884067985.jpg" alt="" />
        <NavLink to='/'><h1>Home</h1></NavLink>
        <NavLink to='/Events'><h1>Events</h1></NavLink>
        <NavLink to='/NewEvent'><h1>Add an Event</h1></NavLink>
      </div>
      <div>
        <h1>Welcome to the best event production in town</h1>
        <h2>take a look in some of our work</h2>
        <div>
          <img className='photo' src="https://cdn0.weddingwire.com/article/5895/3_2/1280/jpeg/5985-rw-plan-a-wedding-step-by-step-porterhouse-los-angeles.jpeg" alt="" />
          <img className='photo' src="https://venuesearch.ie/wp-content/uploads/2019/08/christmas-party-venues-dublin-1024x683.jpeg" alt="" />
          <img className='photo' src="https://stephenswain.com/wp-content/uploads/2018/05/Jesse-Blog-16-1400x932.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;