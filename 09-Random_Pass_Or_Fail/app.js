function generateFailStatus() {
  const name = document.getElementById('studentName').value;
  let subjects = ['Maths', 'Basics', 'Chemistry', 'Life Skills', 'Mechanics'];
  const numSubjectsFailed = Math.floor(Math.random() * 5);

  let result = '';

  if (numSubjectsFailed === 0) {
    result = `${name} passes all subjects. Congratulations!`;
  }
  else {
    const failedSubjects = subjects.slice(0);

    for (let i = 0; i < numSubjectsFailed; i++) {
      const randomIndex = Math.floor(Math.random() * failedSubjects.length);
      subject = failedSubjects.splice(randomIndex, 1)[0];
    }
    result = `${name} will fail in ${failedSubjects.join(', ')}.`;
  }

  // Display the result
  document.getElementById('result').innerHTML = result;
}
