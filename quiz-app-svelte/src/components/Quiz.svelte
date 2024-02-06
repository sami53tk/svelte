<script>
    import { onMount } from 'svelte';
    import { quizStore } from '../lib/QuizStore';
    import Question from './Question.svelte';
    import Button from '@smui/button';
  
    let quizData = [
          { 
            question: "Quelle est la capitale de la France?", 
            options: ["Paris", "Lyon", "Marseille", "Nice", "Toulouse"], 
            correctAnswer: "Paris" 
          },
          { 
            question: "Quelle est la capitale de l'Espagne?", 
            options: ["Madrid", "Barcelone", "Valence", "Séville", "Bilbao"], 
            correctAnswer: "Madrid" 
          },
          { 
            question: "Quelle est la capitale de l'Allemagne?", 
            options: ["Berlin", "Munich", "Hambourg", "Francfort", "Cologne"], 
            correctAnswer: "Berlin"
          },
          { 
            question: "Quelle est la capitale de l'Italie?", 
            options: ["Rome", "Milan", "Naples", "Turin", "Florence"], 
            correctAnswer: "Rome" 
          },
          { 
            question: "Quelle est la capitale de la Belgique?", 
            options: ["Bruxelles", "Anvers", "Gand", "Bruges", "Namur"], 
            correctAnswer: "Bruxelles" 
          },
          { 
            question: "Quelle est la capitale du Royaume-Uni?", 
            options: ["Londres", "Manchester", "Liverpool", "Édimbourg", "Birmingham"], 
            correctAnswer: "Londres" 
          },
          { 
            question: "Quelle est la capitale du Portugal?", 
            options: ["Lisbonne", "Porto", "Faro", "Coimbra", "Évora"], 
            correctAnswer: "Lisbonne" 
          },
          { 
            question: "Quelle est la capitale de la Suisse?", 
            options: ["Berne", "Zurich", "Genève", "Bâle", "Lausanne"], 
            correctAnswer: "Berne" 
          },
          { 
            question: "Quelle est la capitale de la Suède?", 
            options: ["Stockholm", "Göteborg", "Malmö", "Uppsala", "Linköping"], 
            correctAnswer: "Stockholm" 
          },
          { 
            question: "Quelle est la capitale de la Norvège?", 
            options: ["Oslo", "Bergen", "Stavanger", "Trondheim", "Drammen"], 
            correctAnswer: "Oslo" 
          },
          // { 
          //   question: "Quelle est la capitale de la Finlande?", 
          //   options: ["Helsinki", "Tampere", "Turku", "Oulu", "Lahti"], 
          //   correctAnswer: "Helsinki" 
          // },
          // { 
          //   question: "Quelle est la capitale de la Russie?", 
          //   options: ["Moscou", "Saint-Pétersbourg", "Nijni Novgorod", "Kazan", "Sotchi"], 
          //   correctAnswer: "Moscou" 
          // },
          // { 
          //   question: "Quelle est la capitale de la Chine?", 
          //   options: ["Pékin", "Shanghai", "Canton", "Shenzhen", "Chengdu"], 
          //   correctAnswer: "Pékin" 
          // },
          // { 
          //   question: "Quelle est la capitale du Japon?", 
          //   options: ["Tokyo", "Osaka", "Nagoya", "Kyoto", "Sapporo"], 
          //   correctAnswer: "Tokyo" 
          // },
          // { 
          //   question: "Quelle est la capitale de l'Inde?", 
          //   options: ["New Delhi", "Bombay", "Calcutta", "Bangalore", "Chennai"], 
          //   correctAnswer: "New Delhi" 
          // },
          // { 
          //   question: "Quelle est la capitale de l'Australie?", 
          //   options: ["Canberra", "Sydney", "Melbourne", "Brisbane", "Adélaïde"], 
          //   correctAnswer: "Canberra" 
          // },
          // { 
          //   question: "Quelle est la capitale du Brésil?", 
          //   options: ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Salvador", "Fortaleza"], 
          //   correctAnswer: "Brasilia" 
          // },
          // { 
          //   question: "Quelle est la capitale de l'Argentine?", 
          //   options: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "Tucumán"], 
          //   correctAnswer: "Buenos Aires"
          // }
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
        <h3>Question {$quizStore.currentQuestionIndex + 1} sur {$quizStore.questions.length}</h3>
        <Question
            question={$quizStore.questions[$quizStore.currentQuestionIndex]}
            onAnswer={answerQuestion}
        />
    {:else}
        <div>
            <h3>Quiz terminé ! Votre score : {$quizStore.score} / {$quizStore.questions.length}</h3>
            <Button on:click={() => location.reload()}>Recommencer</Button>

        </div>
        
        {#if $quizStore.wrongAnswers.length > 0}
        <div class="wrong-answers-container">
          <h3>Mauvaises réponses :</h3>
          {#each $quizStore.wrongAnswers as { question, correctAnswer, userAnswer }}
              <div class="wrong-answer">
                    <h4>Question: {question}</h4>
                    <p>Réponse correcte: {correctAnswer}<br>
                    Votre réponse: {userAnswer}</p>
              </div>
          {/each}
      </div>
      {/if}
    {/if}
</div>
  

<style>
  .wrong-answers-container {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f8f8f8;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .wrong-answer {
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 6px;
      background-color: #ffeaea;
  }

  .wrong-answers-container>h3 {
      color: #ff6b6b;
  }
</style>