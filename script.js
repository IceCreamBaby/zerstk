document.addEventListener('DOMContentLoaded', function () {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js loaded - callback');
    });

    window.onload = function() {
        var today = new Date();
        var birthday = new Date(today.getFullYear(), 3, 6); // Monat ist 0-basiert, also ist 3 der April
        var florianBirthday = new Date(today.getFullYear(), 7, 17); // 7 ist der August

        if (today.toDateString() === birthday.toDateString()) {
            window.location.href = "frage.html";
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        var form = document.getElementById("birthdayForm");
        if (form) {
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                var selectedDate = new Date(document.getElementById("birthday").value);
                var florianBirthday = new Date(selectedDate.getFullYear(), 7, 17); // 7 ist der August

                if (selectedDate.getMonth() === florianBirthday.getMonth() && selectedDate.getDate() === florianBirthday.getDate()) {
                    window.location.href = "glueckwunsch.html";
                } else {
                    alert("Das ist nicht Florians Geburtstag!");
                }
            });
        }
    });
});
