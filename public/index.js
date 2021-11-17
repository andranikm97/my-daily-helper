//* GET ALL CONTENT

const getExistingContent = async () => {
  const url = 'http://localhost:5000/api/v1/tasks';
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    const data = await response.json();

    data.forEach((element) => {
      $('.content').prepend(taskGenerator(element));
    });
  } catch (error) {
    console.log(error);
  }
};

getExistingContent();

//* TASK GENERATOR

const taskGenerator = (data) => {
  const { content, completed, dateCreated, _id: id } = data;

  let prettyDate = new Date(dateCreated);

  prettyDate = `${prettyDate.getMonth()}/${prettyDate.getDate()}/${prettyDate.getFullYear()}`;

  function generateCheckbox(isChecked) {
    return `${
      isChecked
        ? '<input type = "checkbox" checked>'
        : '<input type = "checkbox" >'
    }`;
  }

  return `
  <div class = "task" _id = ${id}>
    <div>${content}</div>
    ${generateCheckbox(completed)}
    <span class = "date">${prettyDate}</span>
  </div>
  `;
};

//* POST TASK

const submitTask = async (e) => {
  e.preventDefault();

  const url = 'http://localhost:5000/api/v1/tasks';
  const inputBox = $('#input-box');
  const { type } = e.target;

  try {
    if (inputBox.val().trim() === '') {
      throw new Error('Must enter text!', { cause: 'notext' });
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: inputBox.val(),
      }),
    });

    const data = await response.json();
    $('.content').prepend(taskGenerator(data));

    inputBox.val('');
  } catch (error) {
    switch (error.message) {
      case 'Must enter text!':
        // TODO: implement error appearing in UI, indicating that text must be entered
        console.log("Empty strings won' be submitted to the DB.");
        break;
      default:
        console.log(error);
    }
  } finally {
    closeModal();
  }
};

$('.submission-form').on('submit', submitTask);

//* MAKE MODAL
let modal = $('.modal');
let openModal = $('#openModal');
let closeModalButton = $('#closeModal');

const showModal = () => {
  modal.css('display', 'flex');
};

const closeModal = () => {
  modal.css('display', 'none');
};

let submissionTypes = $('.submission-type');
submissionTypes.each(function (index) {
  $(this).click(() => {
    const type = $(this).attr('id').split('-')[1];
    modal.html('');
    switch (type) {
      case 'task':
        modal.append(makeModal(type));
        break;
      case 'reminder':
        modal.append(makeModal(type));
        break;
      case 'event':
        modal.append(makeModal(type));
        break;
      case 'thought':
        modal.append(makeModal(type));
        break;
      default:
        alert('The request task does not exist!');
        break;
    }

    modal.css('display', 'flex');
  });
});

const makeModal = (type) => {
  return `<div class = "submit-form">
    <img src = "./images/close.png" id = "closeModal" class = "closeModalButton" onclick = "closeModal()"/>
    <form name = "hello">
      <h3> Create ${type === 'event' ? 'an' : 'a'} ${type} </h3>
      <textarea id = "input-box"></textarea>
      <button id = "submit-${type}-button" class = "submit-form-button" value = "${type}" type="submit" onclick="submitTask(event)"> Submit </button>
    </form>
  </div>`;
};

//* COMFORT SUBMIT

document.addEventListener('keypress', (e) => {
  if (e.code === 'Enter' && e.shiftKey) {
    submitTask(e);
  }
});
