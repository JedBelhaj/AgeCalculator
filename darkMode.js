document.addEventListener('DOMContentLoaded', () => {
    const modeSwitch = document.getElementById('modeSwitch');
    
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        document.body.classList.add(savedMode);
        updateButtonText(savedMode);
    }

    modeSwitch.addEventListener('click', () => {
        let currentMode = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
        let newMode = currentMode === 'light-mode' ? 'dark-mode' : 'light-mode';
        
        document.body.classList.remove(currentMode);
        document.body.classList.add(newMode);
        
        localStorage.setItem('mode', newMode);
        updateButtonText(newMode);
    });

    function updateButtonText(mode) {
        if (mode === 'dark-mode') {
            modeSwitch.textContent = 'Switch to Light Mode';
        } else {
            modeSwitch.textContent = 'Switch to Dark Mode';
        }
    }
});
