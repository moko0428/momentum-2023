const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-form input");
const noteList = document.querySelector("#note-list");

const NOTES_KEY = "notes";

let notes = [];

function saveNotes() {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

function deleteNote(e) {
  const li = e.target.parentElement;
  li.remove();
  notes = notes.filter((note) => note.id !== parseInt(li.id));
  saveNotes();
}

function paintNote(newNote) {
  // newTodo를 화면에 그려주는 함수
  const li = document.createElement("li");
  li.id = newNote.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteNote);
  li.appendChild(span); // li 안에 span을 넣어준다.
  li.appendChild(btn);
  span.innerText = newNote.text; // span에 newTodo를 넣어준다.
  noteList.appendChild(li);
}

function handleNoteSubmit(e) {
  e.preventDefault();
  const newNote = noteInput.value; // input의 value를 newTodo에 저장하고
  noteInput.value = ""; // input을 비워준다.
  const newNoteObj = {
    text: newNote,
    id: Date.now(),
  };
  notes.push(newNoteObj);
  paintNote(newNoteObj); //1. paintToDo에 newTodo를 보낸다.
  saveNotes();
}

noteForm.addEventListener("submit", handleNoteSubmit);

const savedNotes = localStorage.getItem(NOTES_KEY);

if (savedNotes !== null) {
  const parsedNotes = JSON.parse(savedNotes);
  notes = parsedNotes; // 새로 고침 했을 때 없어지는 것을 방지하여 빈 notes 배열에 항상 parsedToDos를 넣어준다.
  parsedNotes.forEach(paintNote);
}
