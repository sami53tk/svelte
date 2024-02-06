<script>
    import Button from '@smui/button';
    export let question;
    export let onAnswer;
  </script>
  
  <div class="question-card">
    <h2>{question.question}</h2>
    {#each question.options as option}
      <Button on:click={() => onAnswer(option)}>{option}</Button>
    {/each}
  </div>
  
  <style>
    .question-card {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  </style>
  