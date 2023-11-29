document.addEventListener('DOMContentLoaded', function () {
    // Example: Open the chatbot when the button is clicked
    const openChatbotButton = document.getElementById('openChatbot');
    const chatbotWidget = document.getElementById('chatbotWidget');

    openChatbotButton.addEventListener('click', function () {
        // Example: Show the chatbot widget
        chatbotWidget.style.display = 'block';
        
        // You may need to call any initialization function provided by your chatbot library here
        // For example, if your chatbot library has an init function, you can call it like this:
        // chatbotService.init();
    });
});