async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 100 }, //for statically render page
  });
  return await response.json();
}
const page = async () => {
  const todos = await getAllTodos();
  // console.log(todos)
  return (
    <div>
      <h1 className="text-3xl my-5 border-b py-5">Technology</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis
        fuga tenetur. Dolorem neque voluptate ut sed maiores. Laborum ut quis
        alias architecto tempora numquam possimus placeat debitis sit est,
        deleniti ipsum id molestias adipisci harum explicabo rerum ab excepturi
        delectus, dolorum, saepe maxime similique! Minima accusantium similique
        eligendi. Veritatis!
      </p>
      {/* <pre>{JSON.stringify(todos)}</pre> */}
      <br />
      <h1 className="text-2xl">Todos</h1>
      <br />
      <div className="grid grid-cols-3 gap-5">
        {todos &&
          Array.isArray(todos) &&
          todos.map((todo) => (
            <div
              className="border-[1px] border-gray-700 p-5 my-2 rounded-md"
              key={todo.id}
            >
              <h3>
                <span>{todo.id}...</span>
                {todo.title}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;
