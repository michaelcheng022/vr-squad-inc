import UpdateUser from '../components/UpdateUser';

const Edit = ({ query }) => (
  <div>
    <UpdateUser id={query.id} />
  </div>
);

export default Edit;
