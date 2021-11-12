//* MODAL
let modal = $('.modal');
let openModal = $('#openModal');

openModal.click(() => {
  console.log('Clicked!');
  modal.css('display', 'block');
});

window.onclick = function (event) {
  if (event.target === document.getElementById('choiceModal')) {
    modal.css('display', 'none');
  }
};

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
  const { content, completed, date, _id: id } = data;

  let prettyDate = new Date(date);

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
        console.log('Some other error...');
    }
  }
};

$('.submission-form').on('submit', submitTask);

//* COMFORT SUBMIT

document.addEventListener('keypress', (e) => {
  if (e.code === 'Enter' && e.shiftKey) {
    submitTask(e);
  }
});
