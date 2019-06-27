import CreateListing from '../components/CreateListing';
import PleaseSignIn from '../components/PleaseSignIn';

const Sell = props => (
  <PleaseSignIn>
    <CreateListing />
  </PleaseSignIn>
); 

export default Sell;
