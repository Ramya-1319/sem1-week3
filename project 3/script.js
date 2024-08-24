document.querySelector('.submit-btn').addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="q1"]:checked');
    const feedback = document.querySelector('.feedback');
    const progressBar = document.querySelector('.progress');

    if (selectedOption) {
        if (selectedOption.value === 'Paris') {
            feedback.textContent = 'Correct! Paris is the capital of France.';
            feedback.classList.add('correct');
            progressBar.style.width = '100%';
        } else {
            feedback.textContent = 'Incorrect. The correct answer is Paris.';
            feedback.classList.add('incorrect');
            progressBar.style.width = '50%';
        }
        feedback.style.display = 'block';
    } else {
        alert('Please select an answer!');
    }
});