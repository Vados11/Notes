// variables
let inputValue = document.getElementById("title");
let addValue = document.getElementById("create");
let list = document.getElementById("list");
let addPost = document.getElementById("addPost");
let removePost = document.getElementById("removePost");

// Default value in our Notates
const notes = [
  {
    title: "English B2",
    completed: false,
  },
  {
    title: "Frontend developer",
    completed: true,
  },
];

// Render our web-page
function render() {
  list.innerHTML = "";
  if (notes.length === 0) {
    list.innerHTML = "<p>Немає нотатків</p>";
  }
  for (let i = 0; i < notes.length; i++) {
    list.insertAdjacentHTML("beforeend", getNodeTemplate(notes[i], i));
  }
  console.log(notes);
}

render();

addValue.onclick = function () {
  if (inputValue.value.length === 0) return;

  const newNote = {
    title: inputValue.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputValue.value = "";
};

list.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }

    render();
  }
};

// Get notates
function getNodeTemplate(note, index) {
  return `
  <li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span class='${note.completed ? "text-decoration-line-through" : ""}'>${
    note.title
  }</span>
    <span>
      <span class="btn btn-${
        note.completed ? "warning" : "success"
      }" id="addPost" data-index='${index}' data-type='toggle'>&check;</span>
      <span class="btn btn-danger" id="removePost" data-index='${index}' data-type='remove'>&times;</span>
  </span>
</li>`;
}
