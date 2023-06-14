import { todoMock } from "__mock__/datas/todo.data";
import { rest } from "msw";

export const getTodo = rest.get("/api/todo", async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(todoMock));
  // front request => response todoMock
});

// ctx : context의 역자로 접근하기 위한 핸들러
export const addTodo = rest.post("/api/todo", async (req, res, ctx) => {
  let title;
  let content;

  await req.json().then((data) => {
    title = data.title;
    content = data.content;
  });

  return res(
    ctx.status(200),
    ctx.json({
      id: Math.floor(Math.random() * 1000000),
      title,
      content,
      state: false,
    })
    // client request => response newTodo(title,content)
  );
});

export const deleteTodo = rest.delete("/api/todo/:id", (req, res, ctx) => {
  const { id } = req.params;
});

// api 등록 -> msw 생성 -> msw 동작
