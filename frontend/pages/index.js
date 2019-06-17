import Listings from '../components/Listings';
import PleaseSignIn from '../components/PleaseSignIn';

const Home = props => (
  <PleaseSignIn>
    <Listings userId={props.query.id} />
  </PleaseSignIn>
);

export default Home;
