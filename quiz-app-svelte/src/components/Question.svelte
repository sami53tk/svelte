<!-- Question.svelte -->
<script>
  import Button from '@smui/button';
  export let question;
  export let onAnswer;
  let selectedOption = null;

  function handleAnswer(option) {
    selectedOption = option;
    onAnswer(option);
  }
</script>

<div class="question-card">
  <h2 class="question-text">{question.question}</h2>
  <div class="options-container">
    {#each question.options.sort(() => Math.random() - 0.5) as option}
      <Button
        on:click={() => handleAnswer(option)}
        class="option-button {selectedOption === option && question.correctAnswer === option ? 'correct-answer' : ''}"
      >
        {option}
      </Button>
    {/each}
  </div>
</div>

<style>
  .question-card {
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .question-text {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #333;
  }

  .options-container {
    display: flex;
    flex-direction: column;
  }

  .option-button {
    margin: 10px 0;
    border-radius: 8px;
    padding: 15px;
    font-size: 1.2em;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .option-button:hover {
    background-color: #45a049;
  }

  .correct-answer {
    background-color: #4CAF50;
  }
</style>
