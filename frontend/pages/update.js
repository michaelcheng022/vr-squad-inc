import UpdateListing from '../components/UpdateListing';

const Update = ({ query }) => (
  <div>
    <UpdateListing id={query.id} />
  </div>
);

export default Update;
