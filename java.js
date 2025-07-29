// java.js
function checkAnswer(questionId, selectedAnswer) {
    let correctAnswer;
    const feedbackElement = document.getElementById(`feedback${questionId.replace('question', '')}`);

    Define the correct answer for each question
    if (questionId === 'question1') {
        correctAnswer = 'No Monte Horebe';
    }
    /*
    else if (questionId === 'question2') {
        correctAnswer = 'Correct Answer for Question 2';
    } else if (questionId === 'question3') {
        correctAnswer = 'Correct Answer for Question 3';
    }
    */

    // Check if the answer is correct and display feedback
    if (selectedAnswer === correctAnswer) {
      textContent = 'Correto! 🎉';
      className = 'feedback correct';
    } else {
      textContent = `Incorreto. A resposta certa era: ${correctanswer}`;
      className = 'feedback incorrect';
    }

    const questionCard = document.getElementById(questionId);
    const buttons = ('button');
    buttons.for Each(button => {
        button.disabled = true;
    });
    
    (questionId === 'question2') 
    {
        correct Answer = 'Dez';
    }
// seuarquivo.js

function checkAnswer(questionId, userAnswer) {
    // Sua lógica para verificar a resposta aqui
    console.log("Verificando resposta para", questionId, ":", userAnswer);
    // Exemplo de feedback
    const feedbackDiv = document.getElementById("feedback2"); // Assumindo feedback2 é o ID da div de feedback
    if (userAnswer === "Sete") { // Exemplo de resposta correta
        feedbackDiv.textContent = "Correto!";
        feedbackDiv.style.color = "green";
    } else {
        feedbackDiv.textContent = "Incorreto. Tente novamente.";
        feedbackDiv.style.color = "red";
    }
}

// Outras funções ou código JavaScript...
