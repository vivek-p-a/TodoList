const TodoItem = (props) => {
    return (
      <div className={props.isActive?"flex justify-between my-3 p-3 rounded-md bg-green-600":"flex justify-between my-3 p-3 rounded-md bg-purple-600"}>
        <span>
          <div class="flex items-center">
            <input
                id = {props.todoItem}
                type="checkbox"
                className = "form-checkbox h-8 w-6"
                checked={props.isActive}
                onClick={() => props.checkBoxHandler(props.todoItem)}
            />
           <label for={props.todoItem} class="ml-3 text-md font-medium text-white">{props.todoItem}</label>
          </div>
        </span>
        <span>
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1" onClick={() => props.editHandler(props.todoItem)}>
            Edit
        </button>
        <button
          onClick={() => props.deleteHandler(props.todoItem)}
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
