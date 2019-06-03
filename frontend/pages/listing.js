import SingleListing from '../components/SingleListing';

const Listing = props => (
  <div>
    <SingleListing id={props.query.id} />
  </div>
);

export default Listing;
