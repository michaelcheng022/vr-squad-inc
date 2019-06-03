import Listings from '../components/Listings';

const Home = props => (
  <div>
    <Listings userId={props.query.id} />
  </div>
);

export default Home;
