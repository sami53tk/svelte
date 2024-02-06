// src/lib/QuizStore.js
import { writable } from 'svelte/store';

const createQuizStore = () => {
    const { subscribe, set, update } = writable({
        questions: [],
        currentQuestionIndex: 0,
        answers: [],
        score: 0,
        wrongAnswers: [], // Ajout d'un tableau pour stocker les mauvaises réponses
    });

    return {
        subscribe,
        setQuestions: (questions) => set({ questions, currentQuestionIndex: 0, answers: [], score: 0, wrongAnswers: [] }),
        answerQuestion: (answer) => update(state => {
            const isCorrect = state.questions[state.currentQuestionIndex].correctAnswer === answer;
            const updatedState = {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
                answers: [...state.answers, answer],
                score: isCorrect ? state.score + 1 : state.score,
            };

            if (!isCorrect) {
                updatedState.wrongAnswers.push({
                    question: state.questions[state.currentQuestionIndex].question,
                    correctAnswer: state.questions[state.currentQuestionIndex].correctAnswer,
                    userAnswer: answer,
                });
            }

            return updatedState;
        }),
        reset: () => set({ questions: [], currentQuestionIndex: 0, answers: [], score: 0, wrongAnswers: [] }),
    };
};

export const quizStore = createQuizStore();
