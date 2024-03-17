const participantsTable = document.getElementById('participants-table');
const addParticipantBtn = document.getElementById('add-participant');
const form = document.getElementById('registration-form');

addParticipantBtn.addEventListener('click', addParticipantRow);
form.addEventListener('submit', handleSubmit);

function addParticipantRow() {
  const newRow = participantsTable.insertRow();
  const nameCell = newRow.insertCell();
  const nameCellInput = document.createElement('input');
  nameCellInput.type = 'text';
  nameCellInput.required = true;
  nameCell.appendChild(nameCellInput);

  const gradeLevelCell = newRow.insertCell();
  const gradeLevelCellInput = document.createElement('input');
  gradeLevelCellInput.type = 'text';
  gradeLevelCellInput.required = true;
  gradeLevelCell.appendChild(gradeLevelCellInput);
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const participantNames = [];
  const participantGradeLevels = [];

  for (let i = 1; i < participantsTable.rows.length; i++) {
    const nameInput = participantsTable.rows[i].cells[0].firstChild;
    const gradeLevelInput = participantsTable.rows[i].cells[1].firstChild;

    if (nameInput.value && gradeLevelInput.value) {
      participantNames.push(nameInput.value);
      participantGradeLevels.push(gradeLevelInput.value);
    }
  }

  formData.append('participant-names', participantNames.join(', '));
  formData.append('participant-grade-levels', participantGradeLevels.join(', '));

  // You can then send the form data to the server for processing
  // using fetch, XMLHttpRequest, or another method

  console.log(formData);
}