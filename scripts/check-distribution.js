const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, '../lib/quiz-data.ts');
const content = fs.readFileSync(quizDataPath, 'utf-8');

// Extract all correctAnswer values
const correctAnswers = [...content.matchAll(/correctAnswer: (\d+)/g)]
    .map(match => parseInt(match[1]));

// Count distribution
const distribution = { 0: 0, 1: 0, 2: 0, 3: 0 };
correctAnswers.forEach(answer => {
    distribution[answer]++;
});

console.log('\n📊 CORRECT ANSWER DISTRIBUTION:');
console.log('================================');
console.log(`Option A (0): ${distribution[0]} questions (${(distribution[0] / correctAnswers.length * 100).toFixed(1)}%)`);
console.log(`Option B (1): ${distribution[1]} questions (${(distribution[1] / correctAnswers.length * 100).toFixed(1)}%)`);
console.log(`Option C (2): ${distribution[2]} questions (${(distribution[2] / correctAnswers.length * 100).toFixed(1)}%)`);
console.log(`Option D (3): ${distribution[3]} questions (${(distribution[3] / correctAnswers.length * 100).toFixed(1)}%)`);
console.log(`\nTotal: ${correctAnswers.length} questions`);
console.log('================================\n');
