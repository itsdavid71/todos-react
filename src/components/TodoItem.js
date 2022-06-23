import PropTypes from "prop-types";
import styles from "./TodoItem.module.css";
import classNames from "classnames";

function TodoItem({ item, onComplete, onDelete }) {
  const itemClass = classNames(styles.item, {
    [styles.completed]: item.completed,
    [styles.deleted]: item.deleted,
  });
  return (
    <div className={itemClass}>
      <input type="checkbox" checked={item.completed} onChange={onComplete} />
      {item.title}
      <button className="todo-item-delete" onClick={onDelete}>
        X
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TodoItem;
