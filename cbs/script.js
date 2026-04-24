/* ---------------- INIT EMAILJS ---------------- */
emailjs.init("XVahgTf3mV7AwUXDd");

/* ---------------- SAMPLE QUESTIONS ---------------- */
const QUESTIONS = [
  {q: "1. If all Bloops are Razzies and all Razzies are Lazzies, then:", opts:["A. All Bloops are Lazzies","B. Some Lazzies are Bloops","C. All Lazzies are Bloops","D. None"], a:"A"},
  {q: "2. Find the odd one out: 2, 3, 5, 7, 9", opts:["A. 2","B. 3","C. 7","D. 9"], a:"D"},
  {q: "3. Complete the series: 2, 4, 8, 16, ?", opts:["A. 18","B. 32","C. 20","D. 24"], a:"B"},
  {q: "4. If today is Monday, what day will it be in 45 days?", opts:["A. Monday","B. Tuesday","C. Wednesday","D. Sunday"], a:"C"},
  {q: "5. A is taller than B, B is taller than C. Who is the shortest?", opts:["A. A","B. B","C. C","D. Cannot tell"], a:"C"},
  {q: "6. Find the next number: 1, 1, 2, 3, 5, 8, ?", opts:["A. 11","B. 12","C. 13","D. 14"], a:"C"},
  {q: "7. Which word does NOT belong? Apple, Banana, Carrot, Mango", opts:["A. Apple","B. Banana","C. Carrot","D. Mango"], a:"C"},
  {q: "8. If John is older than Mary, and Mary is older than Sam, who is the youngest?", opts:["A. John","B. Mary","C. Sam","D. Cannot tell"], a:"C"},
  {q: "9. Spot the pattern: 3, 6, 12, 24, ?", opts:["A. 36","B. 48","C. 50","D. 60"], a:"B"},
  {q: "10. If two pencils cost 8 Naira, how much do 5 pencils cost?", opts:["A. 18","B. 20","C. 24","D. 22"], a:"C"},
  {q: "11. Which is a valid conclusion? All cats are animals. Some animals are dogs.", opts:["A. Some cats are dogs","B. All cats are dogs","C. Cannot conclude","D. No cats are dogs"], a:"C"},
  {q: "12. Find the missing number: 7, 14, 28, 56, ?", opts:["A. 70","B. 112","C. 96","D. 110"], a:"B"},
  {q: "13. If it rains, the ground gets wet. The ground is wet. Can we conclude it rained?", opts:["A. Yes","B. No","C. Only if sunny","D. Cannot tell"], a:"B"},
  {q: "14. Which word is the odd one: Red, Blue, Green, Circle", opts:["A. Red","B. Blue","C. Green","D. Circle"], a:"D"},
  {q: "15. Complete the analogy: Dog is to Puppy as Cat is to ?", opts:["A. Kitten","B. Cub","C. Calf","D. Chick"], a:"A"},
  {q: "16. If all roses are flowers and some flowers fade quickly, can we conclude some roses fade quickly?", opts:["A. Yes","B. No","C. Only some","D. Cannot tell"], a:"D"},
  {q: "17. Which comes next in the sequence: 2, 4, 12, 48, ?", opts:["A. 192","B. 196","C. 180","D. 200"], a:"A"},
  {q: "18. Select the statement that is logically correct: Either it rains or it does not rain.", opts:["A. Always true","B. Always false","C. Sometimes false","D. Cannot tell"], a:"A"},
  {q: "19. Find the odd one: Circle, Triangle, Square, Cylinder", opts:["A. Circle","B. Triangle","C. Cylinder","D. Square"], a:"C"},
  {q: "20. Mary has twice as many apples as Jane. Jane has 4 apples. How many does Mary have?", opts:["A. 6","B. 8","C. 10","D. 12"], a:"B"},
  {q:"21. If A > B and B > C, then A ? C", opts:["A. >","B. <","C. =","D. Cannot tell"], a:"A"},
  {q:"22. Complete series: 5, 10, 20, 40, ?", opts:["A. 60","B. 80","C. 100","D. 120"], a:"B"},
  {q:"23. Which statement is an assumption? \"He must be hungry because he is eating.\"", opts:["A. Eating causes hunger","B. People eat when hungry","C. Hunger causes eating","D. Cannot tell"], a:"B"},
  {q:"24. Spot the pattern: A, C, F, J, ?", opts:["A. M","B. O","C. N","D. P"], a:"C"},
  {q:"25. Which reasoning is correct? All humans are mortal. Socrates is human. Therefore Socrates is mortal.", opts:["A. Deductive","B. Inductive","C. Fallacy","D. Weak argument"], a:"A"},
  {q:"26. If a bag has 3 red balls and 2 blue balls, probability of picking blue?", opts:["A. 2/5","B. 3/5","C. 1/2","D. 1/5"], a:"A"},
  {q:"27. Find the next number: 10, 20, 40, 80, ?", opts:["A. 120","B. 160","C. 150","D. 140"], a:"B"},
  {q:"28. Which is a logical fallacy? \"You must be wrong because you are young.\"", opts:["A. Ad hominem","B. Deduction","C. Syllogism","D. Induction"], a:"A"},
  {q:"29. Complete pattern: 2, 6, 12, 20, ?", opts:["A. 28","B. 30","C. 32","D. 34"], a:"A"},
  {q:"30. If all A are B, some B are C, can we conclude some A are C?", opts:["A. Yes","B. No","C. Only if A overlap C","D. Cannot tell"], a:"D"},
  {q:"31. Find the next number: 3, 9, 27, ?", opts:["A. 54","B. 81","C. 90","D. 72"], a:"B"},
  {q:"32. Odd one out: Chair, Table, Spoon, Desk", opts:["A. Chair","B. Table","C. Spoon","D. Desk"], a:"C"},
  {q:"33. What comes next: 5, 10, 20, 40, ?", opts:["A. 80","B. 90","C. 100","D. 60"], a:"A"},
  {q:"34. If some cats are dogs, and all dogs are animals, can we conclude some cats are animals?", opts:["A. Yes","B. No","C. Cannot tell","D. Only some"], a:"A"},
  {q:"35. Which word does not belong: Rose, Tulip, Daisy, Oak", opts:["A. Rose","B. Tulip","C. Daisy","D. Oak"], a:"D"},
  {q:"36. If today is Tuesday, what day will it be in 15 days?", opts:["A. Monday","B. Wednesday","C. Thursday","D. Friday"], a:"B"},
  {q:"37. Complete the series: 1, 4, 9, 16, ?", opts:["A. 20","B. 25","C. 24","D. 30"], a:"B"},
  {q:"38. Which is the odd one out: Mercury, Venus, Earth, Moon", opts:["A. Mercury","B. Venus","C. Earth","D. Moon"], a:"D"},
  {q:"39. If all pencils are pens and all pens are tools, are all pencils tools?", opts:["A. Yes","B. No","C. Cannot tell","D. Only some"], a:"A"},
  {q:"40. Complete pattern: 2, 5, 10, 17, ?", opts:["A. 24","B. 26","C. 25","D. 28"], a:"C"},
  {q:"41. Find the next in series: 2, 6, 12, 20, 30, ?", opts:["A. 40","B. 42","C. 44","D. 45"], a:"A"},
  {q:"42. Odd one out: Apple, Mango, Carrot, Banana", opts:["A. Apple","B. Mango","C. Carrot","D. Banana"], a:"C"},
  {q:"43. If all A are B, some B are C, can we conclude some C are A?", opts:["A. Yes","B. No","C. Cannot tell","D. Only if overlap"], a:"B"},
  {q:"44. Find the next: 1, 2, 4, 8, ?", opts:["A. 16","B. 14","C. 12","D. 10"], a:"A"},
  {q:"45. Which reasoning is correct? All men are mortal. John is a man. Therefore John is mortal.", opts:["A. Deductive","B. Inductive","C. Fallacy","D. Weak argument"], a:"A"},
  {q:"46. Complete pattern: Z, X, V, T, ?", opts:["A. R","B. S","C. Q","D. P"], a:"A"},
  {q:"47. Which is the odd one out: Red, Blue, Green, Circle", opts:["A. Red","B. Blue","C. Green","D. Circle"], a:"D"},
  {q:"48. If 3 pencils cost 9 Naira, 6 pencils cost?", opts:["A. 18","B. 15","C. 20","D. 16"], a:"A"},
  {q:"49. Complete series: 1, 3, 6, 10, ?", opts:["A. 14","B. 15","C. 16","D. 18"], a:"B"},
  {q:"50. If some X are Y and some Y are Z, can we conclude some X are Z?", opts:["A. Yes","B. No","C. Cannot tell","D. Only some"], a:"C"}
];


/* ---------------- STATE ---------------- */
let currentIndex = 0;
let answers = {};
let timeLeft = 30 * 60;
let timerInterval;
let userData = { fullName: "", email: "", phone: "" };
const localStorageKey = "examSubmissions"; 

/* ---------------- ELEMENTS ---------------- */
const startBtn = document.getElementById("startBtn");
const acceptBtn = document.getElementById("acceptBtn");
const userEntry = document.getElementById("userEntry");
const disclaimerPage = document.getElementById("disclaimerPage");
const examArea = document.getElementById("examArea");
const questionCard = document.getElementById("questionCard");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const timerSpan = document.getElementById("timer");
const questionGrid = document.getElementById("questionGrid");
const userNameDisplay = document.getElementById("userNameDisplay");
const userEmailDisplay = document.getElementById("userEmailDisplay");

// Add visible cheat attempts counter
const cheatWarningDisplay = document.getElementById("cheatWarning");

/* ---------------- LOCAL STORAGE FUNCTIONS ---------------- */
function checkPreviousSubmission(email) {
  try {
    const submissions = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    return submissions[email] || null;
  } catch (e) {
    console.error("Error reading from Local Storage:", e);
    return null;
  }
}

function saveSubmissionToLocalStorage(result) {
  try {
    let submissions = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    submissions[userData.email] = {
      fullName: userData.fullName,
      score: result.score,
      maxScore: QUESTIONS.length * 2,
      correctQs: result.correctQs,
      date: new Date().toLocaleString(),
    };
    localStorage.setItem(localStorageKey, JSON.stringify(submissions));
  } catch (e) {
    console.error("Error saving to Local Storage:", e);
  }
}

function showPreviousResult(submission) {
  userEntry.style.display = "none";
  disclaimerPage.style.display = "none";
  examArea.style.display = "block";
  clearInterval(timerInterval);

  questionCard.innerHTML = `
    <h2>⚠️ You've Already Completed This Exam!</h2>
    <p>The email **${escapeHtml(userData.email)}** has a previous submission.</p>
    ---
    <h3>Your Previous Exam Result</h3>
    <p>Name: **${escapeHtml(submission.fullName)}**</p>
    <p>Submission Date: **${submission.date}**</p>
    <p>Total Score: **${submission.score}/${submission.maxScore}**</p>
    <p>Correct Questions: ${submission.correctQs.join(", ") || "None"}</p>
    <p class="warning">You cannot retake the exam with this email.</p>
  `;
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";
  questionGrid.style.display = "none";
  timerSpan.textContent = "0:00";
}

/* ---------------- START ---------------- */
startBtn.onclick = () => {
  userData.fullName = document.getElementById("fullName").value.trim();
  userData.email = document.getElementById("email").value.trim().toLowerCase();
  userData.phone = document.getElementById("phone").value.trim();

  if (!userData.fullName || !userData.email || !userData.phone) {
    alert("Please fill all fields");
    return;
  }

  const previousSubmission = checkPreviousSubmission(userData.email);
  if (previousSubmission) {
    showPreviousResult(previousSubmission);
    return;
  }

  userNameDisplay.textContent = "Name: " + userData.fullName;
  userEmailDisplay.textContent = "Email: " + userData.email;

  userEntry.style.display = "none";
  disclaimerPage.style.display = "block";
};

/* ---------------- ACCEPT DISCLAIMER ---------------- */
acceptBtn.onclick = () => {
  disclaimerPage.style.display = "none";
  examArea.style.display = "block";
  renderQuestion();
  buildQuestionGrid();
  timerInterval = setInterval(updateTimer, 1000);
  updateCheatDisplay();
};

/* ---------------- TIMER ---------------- */
function updateTimer() {
  timeLeft--;
  if (timeLeft <= 0) {
    autoSubmit();
    return;
  }
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  timerSpan.textContent = `${m}:${s.toString().padStart(2, "0")}`;
}

/* ---------------- RENDER QUESTION ---------------- */
function renderQuestion() {
  const item = QUESTIONS[currentIndex];
  if (!item) return;
  let optsHtml = "";
  item.opts.forEach((opt) => {
    const letter = opt.charAt(0);
    const checked = answers[currentIndex] === letter ? "checked" : "";
    optsHtml += `<label class="option"><input type="radio" name="opt" value="${letter}" ${checked}/> ${opt}</label>`;
  });

  questionCard.innerHTML = `
    <h3>Question ${currentIndex + 1}/${QUESTIONS.length}</h3>
    <p>${item.q}</p>
    <div class="options">${optsHtml}</div>
  `;

  questionCard.querySelectorAll("input[name='opt']").forEach((r) => {
    r.addEventListener("change", (e) => {
      answers[currentIndex] = e.target.value;
      markQuestionButton(currentIndex, true);
    });
  });
}

/* ---------------- NAVIGATION ---------------- */
prevBtn.onclick = () => { if(currentIndex>0){currentIndex--; renderQuestion();}};
nextBtn.onclick = () => { if(currentIndex<QUESTIONS.length-1){currentIndex++; renderQuestion();}};
submitBtn.onclick = () => { if(confirm("Submit exam?")) submitExam(); };

/* ---------------- SCORE ---------------- */
function calculateScore() {
  let score = 0;
  const correctQs = [];
  for (let i = 0; i < QUESTIONS.length; i++) {
    if (answers[i] === QUESTIONS[i].a) {
      score += 2;
      correctQs.push(i + 1);
    }
  }
  return { score, correctQs };
}

/* ---------------- SUBMIT EXAM ---------------- */
function submitExam() {
  clearInterval(timerInterval);
  const result = calculateScore();
  saveSubmissionToLocalStorage(result);
  sendEmailConfirmation(result);
  sendTelegram(result);

  questionCard.innerHTML = `
    <p>Name: ${escapeHtml(userData.fullName)}<br/>Email: ${escapeHtml(userData.email)}</p>
    <h3>Exam Submitted Successfully!</h3>
    <p>Total Score: <strong>${result.score}/${QUESTIONS.length * 2}</strong></p>
    <p>Correct Questions: ${result.correctQs.join(", ") || "None"}</p>
    <p class="warning">You will not be able to retake the exam with this email.</p>
  `;
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";
  questionGrid.style.display = "none";
  localStorage.setItem("cheatAttempts", 0); // reset cheat counter
}

/* ---------------- EMAILJS ---------------- */
function sendEmailConfirmation(result) {
  const templateParams = {
    user_name: userData.fullName,
    to_email: userData.email,
    email: userData.email,
    score: result.score,
    correctQs: result.correctQs.join(", "),
  };

  emailjs.send("service_pi6k26v", "template_2e40wus", templateParams)
    .then(r => console.log("Email sent!", r.status, r.text))
    .catch(e => console.error("EmailJS error:", e));
}

/* ---------------- TELEGRAM ---------------- */
const BOT_TOKEN_1 = "7378236809:AAGPAtCKvOK3k2_6VxxAjP7eSY4E98F814g";
const CHAT_ID_1 = "6998695047";
const BOT_TOKEN_2 = "8391975491:AAESSi95dlmAlKhX1Kp8H988LIsA0jo0ktU";
const CHAT_ID_2 = "7527733522";

function sendTelegram(result) {
  const message =
    `Name: ${userData.fullName}%0AEmail: ${userData.email}%0APhone: ${userData.phone}%0AScore: ${result.score}/${QUESTIONS.length * 2}%0ACorrect: ${result.correctQs.join(", ")}`;

  [{ bot: BOT_TOKEN_1, chat: CHAT_ID_1 }, { bot: BOT_TOKEN_2, chat: CHAT_ID_2 }]
    .forEach(cfg => {
      if (!cfg.bot || !cfg.chat) return;
      fetch(`https://api.telegram.org/bot${cfg.bot}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: cfg.chat, text: decodeURIComponent(message) }),
      }).catch(()=>{});
    });
}

/* ---------------- ESCAPE HTML ---------------- */
function escapeHtml(s) {
  return typeof s==="string" ? s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])) : "";
}

/* ---------------- QUESTION GRID ---------------- */
function buildQuestionGrid() {
  questionGrid.innerHTML = "";
  const rows = 4;
  const perRow = Math.ceil(QUESTIONS.length / rows);
  let qNum = 1;
  for (let r = 0; r < rows; r++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    for (let c = 0; c < perRow; c++) {
      const btn = document.createElement("button");
      btn.className = "qbtn";
      if (qNum <= QUESTIONS.length) {
        btn.textContent = qNum;
        btn.dataset.q = qNum - 1;
        btn.addEventListener("click", () => {
          currentIndex = Number(btn.dataset.q);
          renderQuestion();
        });
      } else {
        btn.style.visibility = "hidden";
        btn.disabled = true;
      }
      rowDiv.appendChild(btn);
      qNum++;
    }
    questionGrid.appendChild(rowDiv);
  }
  for (let i = 0; i < QUESTIONS.length; i++) markQuestionButton(i, false);
}

function markQuestionButton(index, answered) {
  const btn = questionGrid.querySelector(`button[data-q='${index}']`);
  if (!btn) return;
  if (answered || answers[index]) btn.classList.add("answered");
  else btn.classList.remove("answered");
}

/* ---------------- ANTI-CHEAT SYSTEM ---------------- */
let cheatAttempts = Number(localStorage.getItem("cheatAttempts")) || 0;
updateCheatDisplay();

function warnCheating() {
  cheatAttempts++;
  localStorage.setItem("cheatAttempts", cheatAttempts);
  updateCheatDisplay();

  if (cheatAttempts === 1) alert("⚠️ Cheating in the exam is bad. Please stop minimizing or switching tabs. you 2/5 attempt remain");
  else if (cheatAttempts === 2) alert("⚠️ WARNING! You are about to auto-submit the exam if you continue. you 2/5 attempt remain");
  else if (cheatAttempts >= 3) autoSubmit();
}

function updateCheatDisplay() {
  const remaining = Math.max(3 - cheatAttempts, 0);
  if (cheatWarningDisplay) cheatWarningDisplay.textContent = `Remaining Attempts: ${remaining}`;
}

/* ---------------- AUTO-SUBMIT ---------------- */
function autoSubmit() {
  clearInterval(timerInterval);
  const result = calculateScore();
  questionCard.innerHTML = `
    <h2>⚠️ Exam Automatically Submitted</h2>
    <p>You attempted to leave or minimize the exam 3 times.</p>
    <h3>Your Score: ${result.score}/${QUESTIONS.length * 2}</h3>
    <p>Correct Questions: ${result.correctQs.join(", ")}</p>
  `;
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";
  questionGrid.style.display = "none";
  localStorage.setItem("cheatAttempts", 0);
}

/* ---------------- ANTI-CHEAT TRIGGERS ---------------- */
document.addEventListener("visibilitychange", () => { if(document.hidden) warnCheating(); });
window.addEventListener("beforeunload", () => { warnCheating(); });
window.addEventListener("offline", () => { warnCheating(); });

renderQuestion();
buildQuestionGrid();

/* ---------------- BACKGROUND ---------------- */
const bgImages = [
  "image1.png",
  "image2.png",
  "image3.png",
  
];
let bgIdx = 0;
function changeBg() {
  document.body.style.backgroundImage = `url('${bgImages[bgIdx]}')`;
  bgIdx = (bgIdx + 1) % bgImages.length;
}
changeBg();
setInterval(changeBg, 4000);
//reload option 
// Prevent F5 / Ctrl+R
window.addEventListener('keydown', function(e) {
  if ((e.key === 'F5') || (e.ctrlKey && e.key === 'r')) {
    e.preventDefault();
  }
});

// Prevent swipe refresh on mobile
let touchStartY = 0;
window.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; });
window.addEventListener('touchmove', e => {
  if (window.scrollY === 0 && e.touches[0].clientY > touchStartY) {
    e.preventDefault();
  }
}, { passive: false });
// ---------------- CALCULATOR LOGIC ----------------
let calcOpen = false;

document.getElementById("calcToggleBtn").addEventListener("click", () => {
    calcOpen = !calcOpen;
    document.getElementById("calculator").classList.toggle("hidden");
});

function pressCalc(value) {
    document.getElementById("calcScreen").value += value;
}

function clearCalc() {
    document.getElementById("calcScreen").value = "";
}

function calculateResult() {
    try {
        let screen = document.getElementById("calcScreen");
        screen.value = eval(screen.value);
    } catch {
        screen.value = "Error";
    }
}