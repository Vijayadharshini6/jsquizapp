let quiz = [
  {
    question: "What HTML tag is used to create the first-level header?",
    options: ["h1", "header1", "head1"],
    answer: "h1"
  },
  {
    question: "What tag is used to create the link?",
    options: ["link","url","a",],
    answer: "link"
  },
  {
    question: "What HTML tag is used to create the table?",
    options: [
      "table",
      "tb",
      "tl"],
    answer: "table"
  },
  {
    question: "What tag is used to create a list of unordered items?",
    options: [
      "li",
      "list",
      "ul"],
    answer: "ul"
  },
  {
    question: "What HTML tag is used to create a paragraph?",
    options: [
      "p",
      "para",
      "paragraph"],
    answer: "p"
  },
  {
    question: "What tag is used to insert images into an HTML document?",
    options: [
      "img",
      "image",
      "pic"],
    answer: "img"
  },
];
function displayQuiz() {
  let quizHTML = "";
  for (let i=0;i<quiz.length;i++) {
    quizHTML+="<h2>" + quiz[i].question+"</h2>";
    for (let j=0;j<quiz[i].options.length;j++) {
      quizHTML+="<input type='radio' name='question"+i+"'value='"+quiz[i].options[j]+"'>";
      quizHTML+=quiz[i].options[j]+"<br>";
    }
  }
  document.getElementById("quiz").innerHTML=quizHTML;
}
function submitQuiz() {
  var score=0;
  for (var i=0;i<quiz.length;i++) 
  {
    var selectedOption = document.querySelector('input[name="question' + i + '"]:checked').value;
    if (selectedOption===quiz[i].answer) {
      score++;
    }
  }
  alert("You scored "+score+" out of "+quiz.length+"!");
}
window.onload = displayQuiz;
