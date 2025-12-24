const fs = require('fs');
const path = require('path');

// Read the quiz data file
const quizDataPath = path.join(__dirname, '../lib/quiz-data.ts');
let content = fs.readFileSync(quizDataPath, 'utf-8');

// Function to shuffle correct answer position
function randomizeAnswers(questionBlock) {
    return questionBlock.replace(
        /(\{\s*id:\s*\d+,\s*question:\s*"[^"]+",\s*options:\s*\[)([^\]]+)(\],\s*correctAnswer:\s*)(\d+)(,\s*explanation:[^}]+resourceTitle:[^}]+\})/gs,
        (match, prefix, optionsStr, correctPrefix, currentCorrect, suffix) => {
            // Parse options array
            const options = optionsStr.match(/"[^"]+"/g).map(opt => opt.replace(/^"|"$/g, ''));

            // Current correct is always 0, pick random new position
            const newCorrectIndex = Math.floor(Math.random() * 4);

            // Swap the correct answer with the new position
            if (newCorrectIndex !== 0) {
                [options[0], options[newCorrectIndex]] = [options[newCorrectIndex], options[0]];
            }

            // Rebuild options string
            const newOptionsStr = options.map(opt => `"${opt}"`).join(',\n                    ');

            return `${prefix}\n                    ${newOptionsStr}\n                ${correctPrefix}${newCorrectIndex}${suffix}`;
        }
    );
}

// Process the entire file
console.log('Randomizing correct answer positions...');
content = randomizeAnswers(content);

// Write back
fs.writeFileSync(quizDataPath, content, 'utf-8');
console.log('✅ Successfully randomized all answer positions!');
console.log('Correct answers are now distributed across all 4 option positions.');
