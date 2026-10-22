// ==================== REGISTER DATA ====================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const passwordMessage = document.getElementById("passwordMessage");

        if (password.length < 8) {
            passwordMessage.textContent =
                "Password must be at least 8 characters.";
            passwordMessage.style.color = "red";
            return;
        }

        if (password !== confirmPassword) {
            passwordMessage.textContent =
                "Passwords do not match.";
            passwordMessage.style.color = "red";
            return;
        }

        const student = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("student", JSON.stringify(student));

        passwordMessage.textContent =
            "Registration Successful!";

        passwordMessage.style.color = "green";

    });

}




// ==================== LOGIN FORM ====================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

       if (email === "") {
    alert("Please enter your email.");
    return;
}

if (password === "") {
    alert("Please enter your password.");
    return;
}

const savedStudent = JSON.parse(localStorage.getItem("student"));

if (!savedStudent) {
    alert("Please register first.");
    return;
}

if (
    email === savedStudent.email &&
    password === savedStudent.password
) {
    alert("Login Successful!");
    window.location.assign("./dashboard.html");
} else {
    alert("Invalid email or password.");
}
    

    });

}

// ==================== WELCOME MESSAGE ====================

const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeMessage) {

    const savedStudent = JSON.parse(localStorage.getItem("student"));

    if (savedStudent) {
        welcomeMessage.textContent =
            "Welcome, " + savedStudent.name + "!";
    }

}


// ==================== LOGOUT ====================

const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {

    logoutButton.addEventListener("click", function() {

        window.location.href = "index.html";

    });

}


// ==================== BACK TO DASHBOARD ====================

const backToDashboard = document.getElementById("backToDashboard");

if (backToDashboard) {

    backToDashboard.addEventListener("click", function() {

        window.location.href = "dashboard.html";

    });

}

// ==================== ATTENDANCE CALCULATION ====================

const attendanceCards = document.querySelectorAll(".attendance-card");

attendanceCards.forEach(function(card) {

    const totalText = card.querySelector("p:nth-of-type(1)").textContent;
    const attendedText = card.querySelector("p:nth-of-type(2)").textContent;

    const totalClasses = parseInt(totalText.match(/\d+/)[0]);
    const attendedClasses = parseInt(attendedText.match(/\d+/)[0]);

    const percentage = (attendedClasses / totalClasses) * 100;

    card.querySelector(".percentage").textContent =
        percentage.toFixed(1) + "%";
});



// ==================== VIEW NOTES ====================

function viewNotes(subject) {

    window.location.href = "notes-content.html";

}

// ==================== BACK TO NOTES ====================

const backToNotes = document.getElementById("backToNotes");

if (backToNotes) {

    backToNotes.addEventListener("click", function() {

        window.location.href = "notes.html";

    });

}



// ==================== SUBMIT ASSIGNMENT ====================

function submitAssignment(statusId) {

    const status = document.getElementById(statusId);

    status.textContent = "Submitted";
    status.style.color = "green";

    alert("Assignment Submitted Successfully!");

}

// ==================== DAY SELECTOR ====================

const daySelect = document.getElementById("daySelect");
const dayRows = document.querySelectorAll(".day-row");

if (daySelect) {

    function showSelectedDay() {

        const selectedDay = daySelect.value;

        dayRows.forEach(function(row) {

            if (row.dataset.day === selectedDay) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }

        });

    }

    daySelect.addEventListener("change", showSelectedDay);

    showSelectedDay();

}



// ==================== RESULTS CALCULATION ====================

const resultCards = document.querySelectorAll(".result-card");

resultCards.forEach(function(card) {

    const marks = parseInt(
        card.querySelector(".marks").textContent
    );

    const percentage = (marks / 100) * 100;

    card.querySelector(".result-percentage").textContent =
        percentage.toFixed(1) + "%";

});

// ==================== GRADE CALCULATION ====================

resultCards.forEach(function(card) {

    const marks = parseInt(
        card.querySelector(".marks").textContent
    );

    let grade;

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B+";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    card.querySelector(".grade").textContent = grade;

});


// ==================== NOTICE TOGGLE ====================

function toggleNotice(noticeId, button) {

    const notice = document.getElementById(noticeId);

    if (notice.style.display === "none") {

        notice.style.display = "block";
        button.textContent = "Hide";

    } else {

        notice.style.display = "none";
        button.textContent = "Read More";

    }

}

// ==================== DASHBOARD ATTENDANCE ====================

const dashboardAttendance =
    document.getElementById("dashboardAttendance");

if (dashboardAttendance) {

    const totalClasses = 40;
    const attendedClasses = 34;

    const attendance =
        (attendedClasses / totalClasses) * 100;

    dashboardAttendance.textContent =
        attendance.toFixed(1) + "%";
}
        

// ==================== PENDING ASSIGNMENTS ====================

const pendingAssignments =
    document.getElementById("pendingAssignments");

if (pendingAssignments) {

    const pendingCount = 2;

    pendingAssignments.textContent =
        pendingCount + " Pending";

}


// ==================== SUBJECT COUNT ====================

const subjectCount =
    document.getElementById("subjectCount");

if (subjectCount) {

    const subjects = 4;

    subjectCount.textContent =
        subjects + " Subjects";

}


// ==================== NEW NOTICES ====================

const newNotices =
    document.getElementById("newNotices");

if (newNotices) {

    const noticeCount = 3;

    newNotices.textContent =
        noticeCount + " New";

}


// ==================== STUDENT PROFILE ====================

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

if (profileName && profileEmail) {
    const savedStudent = JSON.parse(localStorage.getItem("student"));

    if (savedStudent) {
        profileName.textContent = savedStudent.name;
        profileEmail.textContent = savedStudent.email;
    }
}



// ==================== EDIT PROFILE ====================

const editProfileButton = document.getElementById("editProfileButton");

if (editProfileButton) {
    editProfileButton.addEventListener("click", function () {
        const savedStudent = JSON.parse(localStorage.getItem("student"));

        if (!savedStudent) {
            alert("Please register first.");
            return;
        }

        const newName = prompt("Enter your name:", savedStudent.name);
        if (newName === null || newName.trim() === "") {
            return;
        }

        const newEmail = prompt("Enter your email:", savedStudent.email);
        if (newEmail === null || newEmail.trim() === "") {
            return;
        }

        savedStudent.name = newName.trim();
        savedStudent.email = newEmail.trim();

        localStorage.setItem("student", JSON.stringify(savedStudent));

        document.getElementById("profileName").textContent = savedStudent.name;
        document.getElementById("profileEmail").textContent = savedStudent.email;
        const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeMessage) {
    welcomeMessage.textContent = "Welcome, " + savedStudent.name + "!";
}
        alert("Profile updated successfully!");
    });
}


// ==================== CHANGE PASSWORD ====================

const changePasswordButton = document.getElementById("changePasswordButton");

if (changePasswordButton) {
    changePasswordButton.addEventListener("click", function () {
        const savedStudent = JSON.parse(localStorage.getItem("student"));

        if (!savedStudent) {
            alert("Please register first.");
            return;
        }

        const currentPassword = prompt("Enter your current password:");

        if (currentPassword === null) {
            return;
        }

        if (currentPassword !== savedStudent.password) {
            alert("Incorrect current password!");
            return;
        }

        const newPassword = prompt("Enter your new password (minimum 8 characters):");

        if (newPassword === null) {
            return;
        }

        if (newPassword.trim().length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        const confirmPassword = prompt("Confirm your new password:");

        if (confirmPassword === null) {
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        savedStudent.password = newPassword;
        localStorage.setItem("student", JSON.stringify(savedStudent));

        alert("Password changed successfully!");
    });
}


const photoUpload = document.getElementById("photoUpload");
const profilePhoto = document.getElementById("profilePhoto");
const defaultProfileIcon = document.getElementById("defaultProfileIcon");

if (photoUpload && profilePhoto && defaultProfileIcon) {
    photoUpload.addEventListener("change", function () {
        const file = this.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image.");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("Photo size must be less than 2 MB.");
            this.value = "";
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {
            profilePhoto.src = event.target.result;
            profilePhoto.style.display = "block";
            defaultProfileIcon.style.display = "none";

            localStorage.setItem("studentProfilePhoto", event.target.result);
        };

        reader.readAsDataURL(file);
    });

    const savedPhoto = localStorage.getItem("studentProfilePhoto");

    if (savedPhoto) {
        profilePhoto.src = savedPhoto;
        profilePhoto.style.display = "block";
        defaultProfileIcon.style.display = "none";
    }
}


const removePhoto = document.getElementById("removePhoto");

if (removePhoto && profilePhoto && defaultProfileIcon && photoUpload) {
    removePhoto.addEventListener("click", function () {
        profilePhoto.src = "";
        profilePhoto.style.display = "none";
        defaultProfileIcon.style.display = "inline";
        
        localStorage.removeItem("studentProfilePhoto");
        photoUpload.value = "";
    });
}


