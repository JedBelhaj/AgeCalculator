

function calculateAge() {
    const dateInput = document.getElementById("date").value;
    let age = new Map();
    if (dateInput) {
        let birthDate = new Date(dateInput);
        let today = new Date();
        
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            days += previousMonth;
        }

        if (months < 0) {
            years--;
            months += 12;
        }


        age.set("years", years);
        age.set("months", months);
        age.set("days", days);
        
        createPrompt(age);
    } else {
        createPrompt("Enter your birthdate.");
    }
}

function createPrompt(age) {
    let message = '';
    if (age instanceof Map) {
        age.forEach((value, key) => {
            if (value !== 0) {
                message += `${value} ${key} `;
            }
        });
        message = 'You are ' + message + 'old.';
    } else {
        message = age;
    }

    let agePrompt = document.getElementById("agePrompt");
    if (agePrompt) {
        agePrompt.textContent = message;
    } else {
        agePrompt = document.createElement('h2');
        agePrompt.className = "thin-text";
        agePrompt.id = "agePrompt";
        agePrompt.textContent = message;
        document.body.appendChild(agePrompt);
    }
}
