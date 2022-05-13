import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((res) => {
  const data = res.data as Todo;
  logTodoTitle(res.data);
});

const logTodoTitle = (todo: Todo) => {
  console.log(todo.title);
};
