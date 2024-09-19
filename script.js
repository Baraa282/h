
        let correctAnswersCount = 0;
        const totalQuestions = 12; // Adjusted to match the actual number of questions

        function checkAnswer(button, isCorrect) {
            if (isCorrect) {
                button.classList.add('correct');
                correctAnswersCount++;

                // Check if all answers are correct
                if (correctAnswersCount === totalQuestions) {
                    // Redirect to the success page
                    window.location.href = 'su.html'; // Redirect to the success page
                }

                // Disable all buttons for this question
                const buttons = button.parentElement.querySelectorAll('button');
                buttons.forEach(btn => btn.disabled = true);
            } else {
                button.classList.add('wrong');
                // Allow the user to try again
                button.parentElement.querySelectorAll('button').forEach(btn => {
                    btn.disabled = false; // Enable all buttons again
                });
            }
        }