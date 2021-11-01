const getExistingContent = async () => {
  const url = 'http://localhost:5000/api/v1/tasks';
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    const data = await response.json();
    console.log(data);

    data.forEach((element) => {
      $('.content').prepend(taskGenerator(element));
    });
  } catch (error) {
    console.log(error);
  }
};

getExistingContent();

const taskGenerator = (data) => {
  const { content, completed, date, _id: id } = data;

  return `
  <div class = "task" _id = ${id}>
  <ul>
  <li>${content}</li>
  <li>${completed ? 'complete' : 'incomplete'}</li>
  <li>${date}</li>
  </ul></div>
  `;
};

$('.submission-form').on('submit', async (e) => {
  e.preventDefault();

  const url = 'http://localhost:5000/api/v1/tasks';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: 'My first note',
      }),
    });

    const data = await response.json();
    console.log(data);

    $('.content').prepend(taskGenerator(data));
  } catch (error) {
    console.log(error);
  }
});
