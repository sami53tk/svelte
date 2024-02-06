// src/lib/QuizStore.js
import { writable } from 'svelte/store';

const createQuizStore = () => {
    const { subscribe, set, update } = writable({
        questions: [],
        currentQuestionIndex: 0,
        answers: [],
        score: 0,
    });

    return {
        subscribe,
        setQuestions: (questions) => set({ questions, currentQuestionIndex: 0, answers: [], score: 0 }),
        answerQuestion: (answer) => update(state => {
            const isCorrect = state.questions[state.currentQuestionIndex].correctAnswer === answer;
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
                answers: [...state.answers, answer],
                score: isCorrect ? state.score + 1 : state.score,
            };
        }),
        reset: () => set({ questions: [], currentQuestionIndex: 0, answers: [], score: 0 }),
    };
};

export const quizStore = createQuizStore();
