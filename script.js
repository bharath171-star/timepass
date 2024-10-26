let currentUser = null;
let pollOptions = [];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    currentUser = document.getElementById('username').value;
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('pollCreationPage').style.display = 'block';
});

document.getElementById('addOption').addEventListener('click', function() {
    const newOption = document.createElement('input');
    newOption.type = 'text';
    newOption.className = 'option';
    newOption.placeholder = `Option ${pollOptions.length + 2}`; // Update option number
    document.getElementById('optionsContainer').appendChild(newOption);
});

document.getElementById('pollForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const question = document.getElementById('pollQuestion').value;
    pollOptions = Array.from(document.getElementsByClassName('option')).map(option => option.value);
    
    // Simulate polling creation and display
    createPoll(question, pollOptions);
});

function createPoll(question, options) {
    document.getElementById('pollCreationPage').style.display = 'none';
    document.getElementById('pollDisplayPage').style.display = 'block';
    
    // Display question
    document.getElementById('pollQuestionDisplay').innerText = question;
    
    // Display options and add voting functionality
    const pollOptionsContainer = document.getElementById('pollOptions');
    pollOptionsContainer.innerHTML = ''; // Clear previous options if any
    options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.innerHTML = `<input type="radio" name="pollOption" id="option${index}" value="${option}"> ${option}`;
        pollOptionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('voteButton').addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="pollOption"]:checked');
        if (selectedOption) {
            // Here you would send the vote to the server (simulated)
            alert(`You voted for: ${selectedOption.value}`);
            displayResults();
        } else {
            alert('Please select an option to vote.');
        }
    });
}

function displayResults() {
    document.getElementById('resultDisplay').innerText = 'Thank you for voting!';
    // Update results dynamically if needed
}
