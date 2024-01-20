let text = 'Hey buddy, you know what ??? You are HACKED !!! :P Just kidding (although you are vulnerable through javascript), welcome to my world !!! Share your thoughts, emotions freely here... You can use any name you want to start the chat, it is your chat-fantasy !!! I am providing what Mark Zuckerberg could not provide :P , and guess what ???? A login-less chat system !!!!! Had a nice day ??? make some noise here ! had a bad day ??? Just utter the hell out of you here !!! Did your mom smack you ??? did your dad disown you ???? did your boss fire you ???? Did your beloved one break up with you ???? :P Do not worry, there are a lot of people here waiting to condole you..... Or are you a hacker ??? Trying to hack some shit out of the net ???? This is your playground !!! this site can partially be damaged through cross site scripting if you can figure it out, even you can hack or modify the entire database if you are smart enough, so your trials would be appreciated....BTW, you can call me Prosenjit :) Hey buddy, you know what ??? You are HACKED !!! :P Just kidding (although you are vulnerable through javascript), welcome to my world !!! Share your thoughts, emotions freely here... You can use any name you want to start the chat, it is your chat-fantasy'; 

let i = 0; // The current index in the string
let chars = text.split(''); // Split the text into characters
let charIndex = 0; // The current character index

function generateText() {
    if (charIndex < chars.length) {
        document.getElementById('h1').innerHTML += chars[charIndex];
        charIndex++;
        
    } else {
        scrollToBottom();
        // Stop generating text when done
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(generateText, 100); // Generate text every 100ms


document.addEventListener('DOMContentLoaded', (event) => {
    let text2 = 'Why I left dark web ??? This story goes way back to 2016, but I remember it like it was yesterday. When I was 16, I had a really good friend a year younger who was deep into coding. I met him years earlier in a computer club in middle school and he had been integral in me becoming tech-literate over time. The guy knew 3 coding languages by heart in his 7th grade... Anyways, he ends up telling me about TOR and all that while we were chatting with some friends in IRC after school. Some of the older guys had some really interesting stories and I, of course, dug real deep into them all. It did not take long for me to download TOR and start looking up .onion links. My first couple of weeks were spent clicking around, just trying to go deeper and find different things. I was saving all the good links I could find in a notecard. I found various things like a dark-web search engine, something similar to a hidden-wiki, a few conspiracy sites, the usual drug stuff, porn I wanted to be nowhere near, and even a hitman forum. The thing that made me uninstall TOR came about 2.5 weeks in. I was browsing a forum and came across a thread that was talking about a guy who had been kidnapped and was being held for ransom. The kidnappers were posting pictures of him and his family and were threatening to kill him if they did not get the money. I was horrified and could not believe what I was seeing. I was so scared that I closed TOR and deleted it from my computer. I have not been back since.';
    let chars2 = text2.split(''); // Split the text into characters
    let charIndex2 = 0; // The current character index

    function generateText2() {
        if (charIndex2 < chars2.length) {
            document.getElementById('h2').innerHTML += chars2[charIndex2];
            charIndex2++;
        } else {
            // Stop generating text when done
            clearInterval(intervalId2);
        }
    }
    
    let intervalId2 = setInterval(generateText2, 150); // Generate text every 100ms
    
});

const socket = io()
let name;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
do {
    name = prompt('Enter your Name: ')
} while (!name)

textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }
    // Append
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()
    // Send to server
    socket.emit('message', msg)
}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')
    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    scrollToBottom()
}

// Receive messages
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming')
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}
