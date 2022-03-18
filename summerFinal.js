// JavaScript source code

//nav bar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

// Quiz

let farmQuiz = document.getElementById("complete");

farmQuiz.addEventListener("click", startQuiz);
function startQuiz() {
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;

    let correct = 0;

    if (question1 === "Find a farmer to help them roll over") {
        correct++;
    }
    if (question2 === "All of the above") {
        correct++;
    }
    if (question3 === "True") {
        correct++;
    }

    let messages = [
        "You're a sheep wiz!!",
        "You have some sheep knowledge.",
        "Go back to the city!! "
    ];

    let range;

    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
    }

    if (correct > 2) {
        range = 0;
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById(
      "num-correct"
    ).innerHTML = `You got ${correct} correct.`;
    document.getElementById("message").innerHTML = messages[range];
}
