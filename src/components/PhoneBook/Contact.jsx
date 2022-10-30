import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className="contactsList__item">
      <span className="contactsList__info">
        <b>{name}:</b> {phone}
      </span>
      <button className="contactsList__btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
