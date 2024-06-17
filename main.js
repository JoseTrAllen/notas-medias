
const inputStudent = document.getElementById("name");
const inputNotes = document.getElementById("notes");
const nameText = document.getElementById("paragraph-name");
const noteText = document.getElementById("paragraph-notes");
const averageText = document.getElementById("paragraph-average");
const addbutton = document.getElementById("add-button");

const createNotesArray = (inputNotes) => {
  return inputNotes.split(',').map((note) => parseFloat(note.trim()));
}

const averageGrade = (notesArray) => {
  const reduce = notesArray.reduce((acc, note) => acc + note, 0);
  const average = reduce / notesArray.length;
  const total = Number(average.toFixed(2));
  return total;
}

const profileName = (total) => {
  nameText.innerText = `Name: ${inputStudent.value}`;
  noteText.innerText = `Notes: ${inputNotes.value}`;
  averageText.innerText = `Average: ${total}`;
  if (total >= 5) {
    averageText.style.color = "rgb(0, 255, 0)"
  } else {
    averageText.style.color = "red"
  }
}

addbutton.addEventListener("click",() => {
  if (!inputStudent.value || !inputNotes.value) {
    alert("Empty field")
  } else {
    const notesArray = createNotesArray(inputNotes.value)
    const totalText = averageGrade(notesArray);
    profileName(totalText)
  };
})

