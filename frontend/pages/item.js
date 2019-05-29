import SingleListing from '../components/SingleListing';

const Item = props => (
  <div>
    <SingleListing id={props.query.id} />
  </div>
);

export default Item;
