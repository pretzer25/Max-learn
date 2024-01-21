
    // <button onclick="sendLink('https://example.com')">Send Link</button>

        // Function to add a random letter between each letter in the link
        function addRandomLetters(link) {
            return link.split('').map(char => char + String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');
        }

        // Function to send link to go.html
        function sendLink(link) {
            const modifiedLink = addRandomLetters(link);
            // Open go.html in a new window and pass the modified link as a query parameter
            window.open(`go.html?link=${encodeURIComponent(modifiedLink)}`, '_blank');
        }
