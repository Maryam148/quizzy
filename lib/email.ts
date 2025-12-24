import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not defined')
}

export const resend = new Resend(process.env.RESEND_API_KEY)

interface QuizResults {
    topic: string
    score: number
    totalQuestions: number
    percentage: number
    userEmail: string
}

export async function sendQuizResults(results: QuizResults) {
    const { topic, score, totalQuestions, percentage, userEmail } = results

    // Email to user
    const userEmailHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #000000;
            color: #ffff00;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #1a1a1a;
            border: 2px solid #ffff00;
            border-radius: 10px;
            padding: 30px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .score {
            font-size: 48px;
            font-weight: bold;
            text-align: center;
            color: ${percentage >= 80 ? '#ccff00' : percentage >= 60 ? '#ffff00' : '#f0ff00'};
            margin: 20px 0;
          }
          .details {
            background-color: rgba(255, 255, 0, 0.1);
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .button {
            display: inline-block;
            background: linear-gradient(to right, #ffff00, #f0ff00);
            color: #000000;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Quiz Complete!</h1>
            <p>Quizzy Quizzy - ${topic} Quiz Results</p>
          </div>
          
          <div class="score">
            ${score}/${totalQuestions} (${percentage}%)
          </div>
          
          <div class="details">
            <h3>Score Breakdown:</h3>
            <ul>
              <li>✓ Correct: ${score}</li>
              <li>✗ Incorrect: ${totalQuestions - score}</li>
            </ul>
          </div>
          
          <div style="text-align: center;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard" class="button">
              Take Another Quiz →
            </a>
          </div>
          
          <p style="text-align: center; margin-top: 30px; color: #f0ff00; font-size: 14px;">
            Keep practicing to master ${topic}! 💪
          </p>
        </div>
      </body>
    </html>
  `

    // Email to admin
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com'
    const adminEmailHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #000000;
            color: #ffff00;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #1a1a1a;
            border: 2px solid #ffff00;
            border-radius: 10px;
            padding: 30px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          td {
            padding: 10px;
            border-bottom: 1px solid rgba(255, 255, 0, 0.2);
          }
          td:first-child {
            color: #f0ff00;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>📊 New Quiz Submission</h2>
          <table>
            <tr>
              <td>User Email:</td>
              <td>${userEmail}</td>
            </tr>
            <tr>
              <td>Topic:</td>
              <td>${topic}</td>
            </tr>
            <tr>
              <td>Score:</td>
              <td>${score}/${totalQuestions} (${percentage}%)</td>
            </tr>
            <tr>
              <td>Submitted:</td>
              <td>${new Date().toLocaleString()}</td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  `

    try {
        // Send to user
        await resend.emails.send({
            from: 'Quizzy Quizzy <onboarding@resend.dev>', // Change this to your verified domain
            to: userEmail,
            subject: `Your ${topic} Quiz Results - ${percentage}%`,
            html: userEmailHTML,
        })

        // Send to admin
        await resend.emails.send({
            from: 'Quizzy Quizzy <onboarding@resend.dev>',
            to: adminEmail,
            subject: `New ${topic} Quiz Submission - ${userEmail}`,
            html: adminEmailHTML,
        })

        return { success: true }
    } catch (error) {
        console.error('Failed to send emails:', error)
        return { success: false, error: error }
    }
}
