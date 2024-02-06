<!-- src/components/Quiz.svelte -->
<script>
    import { onMount } from 'svelte';
    import { quizStore } from '../lib/QuizStore';
    import Question from './Question.svelte';
  
    let quizData = [
      // Exemple de données, à remplacer par vos vraies questions
      { question: "Quelle est la capitale de la France?", options: ["Paris", "Lyon", "Marseille"], correctAnswer: "Paris" },
      // Ajoutez d'autres questions ici
    ];
  
    onMount(() => {
      quizStore.setQuestions(quizData);
    });
  
    const answerQuestion = (answer) => {
      quizStore.answerQuestion(answer);
    };
  </script>
  
  <div>
    {#if $quizStore.currentQuestionIndex < $quizStore.questions.length}
      <Question
        question={$quizStore.questions[$quizStore.currentQuestionIndex]}
        onAnswer={answerQuestion}
      />
    {:else}
      <div>
        Quiz terminé ! Votre score : {$quizStore.score}
        <!-- Ajoutez un bouton pour recommencer -->
      </div>
    {/if}
  </div>
  