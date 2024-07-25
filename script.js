const movieSuggestions = {
    horror: [
        { name: "The Conjuring", link: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
        { name: "Insidious", link: "https://www.youtube.com/watch?v=FRf4PcgHV5g" },
        { name: "Get Out", link: "https://www.youtube.com/watch?v=sRfnevzM9kQ" }
    ],
    action: [
        { name: "Mad Max: Fury Road", link: "https://www.youtube.com/watch?v=hEJnMQG9ev8" },
        { name: "John Wick", link: "https://www.youtube.com/watch?v=2AUmvWm5ZDQ" },
        { name: "Die Hard", link: "https://www.youtube.com/watch?v=2TQ-pOvI6U8" }
    ],
    comedy: [
        { name: "Superbad", link: "https://www.youtube.com/watch?v=4ea1Z7T2D4I" },
        { name: "Step Brothers", link: "https://www.youtube.com/watch?v=9C2HClH0ThM" },
        { name: "The Hangover", link: "https://www.youtube.com/watch?v=2E4ZyDsGnmE" }
    ],
    romantic: [
        { name: "The Notebook", link: "https://www.youtube.com/watch?v=FC6h60A8sMg" },
        { name: "Pride and Prejudice", link: "https://www.youtube.com/watch?v=1dYBvOX3FI0" },
        { name: "La La Land", link: "https://www.youtube.com/watch?v=0pdqf4P9MB8" }
    ]
};

const emergencyNumbers = {
    hospital: "123-456-7890",
    police: "911",
    fire: "101",
    ambulance: "102"
};

const foodDeliveryLinks = {
    zomato: "https://www.zomato.com",
    swiggy: "https://www.swiggy.com"
};

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userMessage = userInput.value.trim();

    if (userMessage) {
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'chat-message user-message';
        userMessageElement.textContent = userMessage;
        chatBox.appendChild(userMessageElement);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear the input
        userInput.value = '';

        // Simulate a bot response
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'chat-message bot-message';
            botMessageElement.innerHTML = getBotResponse(userMessage); // Use innerHTML to render HTML content
            chatBox.appendChild(botMessageElement);

            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
   if (lowerCaseMessage.includes("i want to see a movie")){
    return "Which type of movies you want to see??"
   }
    if (lowerCaseMessage.includes("horror movie") || lowerCaseMessage.includes("i want to see a horror movie")) {
        return "Here are some horror movies you might like: " + movieSuggestions.horror.map(movie => `<a href="${movie.link}" target="_blank">${movie.name}</a>`).join(", ");
    } else if (lowerCaseMessage.includes("action movie") || lowerCaseMessage.includes("i want to see an action movie")) {
        return "Here are some action movies you might like: " + movieSuggestions.action.map(movie => `<a href="${movie.link}" target="_blank">${movie.name}</a>`).join(", ");
    } else if (lowerCaseMessage.includes("comedy movie") || lowerCaseMessage.includes("i want to see a comedy movie")) {
        return "Here are some comedy movies you might like: " + movieSuggestions.comedy.map(movie => `<a href="${movie.link}" target="_blank">${movie.name}</a>`).join(", ");
    } else if (lowerCaseMessage.includes("romantic movie") || lowerCaseMessage.includes("i want to see a romantic movie")) {
        return "Here are some romantic movies you might like: " + movieSuggestions.romantic.map(movie => `<a href="${movie.link}" target="_blank">${movie.name}</a>`).join(", ");
    } else if (lowerCaseMessage.includes("i am in trouble") || lowerCaseMessage.includes("emergency")) {
        return "Here are some emergency numbers:<br>Hospital: " + emergencyNumbers.hospital + "<br>Police: " + emergencyNumbers.police + "<br>Fire: " + emergencyNumbers.fire + "<br>Ambulance: " + emergencyNumbers.ambulance;
    } else if (lowerCaseMessage.includes("i am hungry!!!")||lowerCaseMessage.includes("hungry") || lowerCaseMessage.includes("i am hungry")) {
        return "Ohk Dear, here are some online food apps where you can order food and enjoy: <br><a href='" + foodDeliveryLinks.zomato + "' target='_blank'>Zomato</a>, <a href='" + foodDeliveryLinks.swiggy + "' target='_blank'>Swiggy</a>";
    } 
    else {
        return "Sorry, I did not understand that. Can you please clarify?";
    }
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}
