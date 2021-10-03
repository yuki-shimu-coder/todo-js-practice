import "./styles.css";

/**
 * タスクを追加する処理を実装
 */
// 追加ボタンのノードを取得
const todoAdd = document.getElementById("js-todo-add");
// 追加ボタンがクリックされたときのイベントを設定
todoAdd.addEventListener("click", () => {
  addIncomplete();
});

// ===============================================
// 未完了エリアへのタスク追加を関数化する
// ===============================================
const addIncomplete = () => {
  // 入力テキストの値を取得する
  const newTask = document.getElementById("js-todo-item").value;
  // 入力エリアを空にする
  document.getElementById("js-todo-item").value = "";
  // 未完了エリアに追加する要素を生成する
  // タスクテキスト
  const p = document.createElement("p");
  p.className = "todoName";
  p.innerText = newTask;

  // 完了ボタン
  const completeBtn = document.createElement("button");
  completeBtn.className = "complete";
  completeBtn.innerText = "完了";
  // 完了ボタンイベント
  completeBtn.addEventListener("click", () => {
    //タスクのノードを取得する
    const completeTask = completeBtn.closest(".todo-task");
    //未完了エリアからタスクを削除する
    completeTask.remove();
    //タスクのノードを生成し、完了エリアに追加する
    // タスクテキスト
    const p = document.createElement("p");
    p.className = "todoName";
    p.innerText = newTask;
    // 戻すボタン
    const backBtn = document.createElement("button");
    backBtn.className = "back";
    backBtn.innerText = "戻す";
    // 削除ボタン
    const i = document.createElement("i");
    i.className = "fas fa-trash-alt";
    // divタグを生成する
    const div = document.createElement("div");
    div.className = "list-row";
    // divに追加する
    div.appendChild(p);
    div.appendChild(backBtn);
    div.appendChild(i);

    // lタグを生成する
    const li = document.createElement("li");
    li.className = "todo-task";
    li.appendChild(div);

    // 未完了エリアにタスクを追加する
    const completeList = document.getElementById("js-todo-complete-list");
    completeList.appendChild(li);
  });

  // 削除ボタン
  const i = document.createElement("i");
  i.className = "fas fa-trash-alt";

  // divタグを生成する
  const div = document.createElement("div");
  div.className = "list-row";
  // divに追加する
  div.appendChild(p);
  div.appendChild(completeBtn);
  div.appendChild(i);

  // lタグを生成する
  const li = document.createElement("li");
  li.className = "todo-task";
  li.appendChild(div);

  // 未完了エリアにタスクを追加する
  const incompList = document.getElementById("js-todo-incomplete-list");
  incompList.appendChild(li);
};
