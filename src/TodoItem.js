const TodoItem = (props) => {
    return (
      <div className="flex justify-between my-3">
        <span>
          <input
            type="checkbox"
            onClick={() => props.checkBoxHandler(props.deleteIndex)}
            defaultChecked={props.isActive}
          ></input>
          {props.todoItem}
        </span>
        <span>
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1" onClick={() => props.editHandler(props.deleteIndex)}>
            Edit
        </button>
        <button
          onClick={() => props.deleteHandler(props.deleteIndex)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </button>
        </span>
      </div>
    );
  };

  export { TodoItem };
