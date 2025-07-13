document.addEventListener("DOMContentLoaded", function () {
    function calculateAge(dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Handle child form submission
    const childForm = document.getElementById("child-form");
    if (childForm) {
        childForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const dob = document.getElementById("child-dob").value;
            const age = calculateAge(dob);

            if (age >= 18) {
                alert("Error: Age must be below 18 for child registration.");
                return;
            }

            const patientDetails = {
                name: document.getElementById("child-name").value,
                dob: dob,
                address: document.getElementById("child-address").value,
                disease: document.getElementById("child-disease").value,
                vaccine: document.getElementById("child-vaccine").value,
                type: "Child"
            };

            localStorage.setItem("patientDetails", JSON.stringify(patientDetails));
            window.location.href = "appointment.html";
        });
    }

    // Handle adult form submission
    const adultForm = document.getElementById("adult-form");
    if (adultForm) {
        adultForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const dob = document.getElementById("adult-dob").value;
            const age = calculateAge(dob);

            if (age < 18) {
                alert("Error: Age must be 18 or above for adult registration.");
                return;
            }

            const patientDetails = {
                name: document.getElementById("adult-name").value,
                dob: dob,
                address: document.getElementById("adult-address").value,
                disease: document.getElementById("adult-disease").value,
                vaccine: document.getElementById("adult-vaccine").value,
                type: "Adult"
            };

            localStorage.setItem("patientDetails", JSON.stringify(patientDetails));
            window.location.href = "appointment.html";
        });
    }
});
