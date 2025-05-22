function toggleTab(button, tabId) {
    const buttons = document.getElementsByClassName('image-button');
    const tabContents = document.getElementsByClassName('tabcontent');
    const introTitle = document.getElementById('intro-title');
    const tab = document.getElementById(tabId);
    const isActive = button.classList.contains('active-tab-btn');
    const buttonContainer = document.querySelector('.button-container');

    // Hide all tab contents
    for (let t of tabContents) t.classList.remove('active');

    if (!isActive) {
        // Hide all buttons except the clicked one
        for (let btn of buttons) {
            if (btn !== button) btn.style.display = 'none';
        }
        // Show the tab content
        tab.classList.add('active');
        button.classList.add('active-tab-btn');
        // Change intro title if first button
        if (button.id === 'button1') {
            introTitle.innerHTML = "<b>About Me</b>";
        }
        if (button.id === 'button2') {
            introTitle.innerHTML = "<b>Computer Science</b>";
        }
        if (button.id === 'button3') {
            introTitle.innerHTML = "<b>Socials</b>";
        }

        // Align buttons to the left after the click
        buttonContainer.style.justifyContent = 'flex-start';
    } else {
        // Show all buttons
        for (let btn of buttons) btn.style.display = '';
        // Hide tab content
        tab.classList.remove('active');
        button.classList.remove('active-tab-btn');
        introTitle.innerHTML = "<b>Hello, I'm Emma!</b>";

        // Keep buttons left-aligned
        buttonContainer.style.justifyContent = 'flex-start';
    }

}
