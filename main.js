const lines = [
                    'const greet = (name) => {',
                    '    return `Hello, ${name} and ',
                    '    Welcome to my Portfolio!',
                    '};',
                    'console.log(greet("Strangers Name"));'
                ];

                let lineIndex = 0;
                let charIndex = 0;
                let typingSpeed = 65;
                let cursorVisible = true;
                const cursorChar = '|'; // Cursor character

                function typeNextChar() {
                    if (lineIndex < lines.length) {
                        let currentText = lines[lineIndex].slice(0, charIndex + 1);
                        document.getElementById(`codeLine${lineIndex + 1}`).textContent = currentText + cursorChar;
                        charIndex++;

                        if (charIndex < lines[lineIndex].length) {
                            setTimeout(typeNextChar, typingSpeed);
                        } else {
                            // Remove cursor and move to next line
                            document.getElementById(`codeLine${lineIndex + 1}`).textContent = lines[lineIndex]; 
                            lineIndex++;
                            charIndex = 0;
                            setTimeout(typeNextChar, 300); // Pause slightly between lines
                        }
                    } else {
                        setTimeout(clearAndRestart, 1500); // Pause before restarting
                    }
                }

                function clearAndRestart() {
                    for (let i = 1; i <= lines.length; i++) {
                        document.getElementById(`codeLine${i}`).textContent = "";
                    }
                    lineIndex = 0;
                    charIndex = 0;
                    setTimeout(typeNextChar, 500);
                }

                setInterval(() => {
                    cursorVisible = !cursorVisible;
                    let currentLine = document.getElementById(`codeLine${lineIndex + 1}`);
                    if (currentLine) {
                        let textWithoutCursor = currentLine.textContent.replace(cursorChar, '');
                        currentLine.textContent = cursorVisible ? textWithoutCursor + cursorChar : textWithoutCursor;
                    }
                }, 400);

                typeNextChar();
