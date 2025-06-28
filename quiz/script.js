const questions = [
  { q: "What does HTML stand for?", a: ["HyperText Markup Language", "Hot Mail", "How To Make Lasagna"], correct: "HyperText Markup Language" },
  { q: "What does CSS stand for?", a: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Setup"], correct: "Cascading Style Sheets" },
  { q: "Which is a JavaScript framework?", a: ["React", "Laravel", "Django"], correct: "React" },
  { q: "Which tag creates a link?", a: ["<link>", "<a>", "<href>"], correct: "<a>" },
  { q: "Where is JS code placed?", a: ["<script>", "<style>", "<js>"], correct: "<script>" },
  { q: "Which is a correct variable?", a: ["var 1a;", "var _name;", "var-name;"], correct: "var _name;" },
  { q: "Which loop is not in JS?", a: ["for", "foreach", "loop"], correct: "loop" },
  { q: "Which HTML tag makes a list?", a: ["<ul>", "<list>", "<ol>"], correct: "<ul>" },
  { q: "Which is a JavaScript data type?", a: ["boolean", "floaty", "decimal"], correct: "boolean" },
  { q: "How do you write a comment in JS?", a: ["// comment", "<!-- comment -->", "# comment"], correct: "// comment" }
];

let current = 0, score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.q;

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  q.a.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === q.correct) score++;
      nextQuestion();
    };
    optionsBox.appendChild(btn);
  });

  document.getElementById("progress").textContent = `Question ${current + 1} of ${questions.length}`;
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").textContent = `🎉 You scored ${score} out of ${questions.length}`;
    document.getElementById("nextBtn").style.display = "none";
  }
}

window.onload = showQuestion;
