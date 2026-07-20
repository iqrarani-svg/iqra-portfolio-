// Dark Mode Toggle Logic
const darkModeBtn = document.getElementById('dark-mode-toggle');

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeBtn.textContent = '☀️ Light Mode';
        } else {
            darkModeBtn.textContent = '🌙 Dark Mode';
        }
    });
}

// Live API Fetch Logic
const fetchBtn = document.getElementById('fetch-btn');
const apiDataText = document.getElementById('api-data');

if (fetchBtn) {
    fetchBtn.addEventListener('click', () => {
        apiDataText.textContent = "Loading joke...";
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(res => res.json())
            .then(data => {
                apiDataText.textContent = `${data.setup} — ${data.punchline}`;
            })
            .catch(() => {
                apiDataText.textContent = "Failed to load data. Please try again!";
            });
    });
}