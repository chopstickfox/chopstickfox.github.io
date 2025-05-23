function toggleTab(button, tabId) {
    hideAllTabsAndRows();
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
        // Reset intro title if first button
        introTitle.innerHTML = "<b>Hello, I'm Emma!</b>";

        // Keep buttons left-aligned
        buttonContainer.style.justifyContent = 'flex-start';
    }
const tab2Extra = document.getElementById('tab2-extra');
if (tab2Extra) {
    // Show when tab2 is being activated, hide otherwise
    if (tabId === 'tab2' && !isActive) {
        tab2Extra.classList.add('active');
    } else {
        tab2Extra.classList.remove('active');
    }
    }
    const codeGrid = document.getElementById('code-grid');
    if (codeGrid) {
        if (tabId === 'tab2' && !isActive) {
            codeGrid.classList.add('active');
        } else {
            codeGrid.classList.remove('active');
        }
    }
    function playButtonSound() {
    const audio = document.getElementById('button-sound');
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}
    // Attach to all code-grid buttons
    document.querySelectorAll('#code-grid button').forEach(btn => {
        btn.addEventListener('click', playButtonSound);
    });

    /*function showSmallButtonsTab(num) {
    const tab = document.getElementById('small-buttons-tab');
    const contents = [
        `<img src="aircraft.png" alt="Aircraft" style="width:80vw"><p>This is Aircraft info.</p>`,
        `<img src="aiplanes1.png" alt="Airplane1" style="width:80vw"><img src="aiplanes2.png" alt="Airplane2" style="width:80vw"><p>This is Airplanes info.</p>`,
        `<img src="Helicopter.png" alt="Helicopter" style="width:80vw;"><p>This is Helicopter info.</p>`,
        `<img src="factory1.png" alt="Factory1" style="width:80vw;"><img src="factory2.png" alt="Factory2" style="width:80vw;"><img src="factory3.png" alt="Factory3" style="width:80vw;"><img src="factory4.png" alt="Factory4" style="width:80vw;"><p>This is Factory info.</p>`,
        `<img src="supplier.png" alt="Supplier" style="width:80vw;"><p>This is Driver info.</p>`
        `<img src="driver1.png" alt="Driver1" style="width:80vw;"><img src="driver2.png" alt="Driver2" style="width:80vw;"><p>This is Supplier info.</p>`,
    ];
    tab.innerHTML = contents[num - 1];
    tab.classList.add('active');
}*/

function hideAllTabsAndRows() {
    // Hide all tab outputs
    document.querySelectorAll('.small-buttons-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.innerHTML = '';
    });
    // Hide the output button row
    const codeRow = document.querySelector('.code-row');
    if (codeRow) codeRow.classList.remove('active');
}

const codeRow = document.querySelector('.code-row');
if (codeRow) {
    if (tabId === 'tab2' && !isActive) {
        codeRow.classList.add('active');
    } else {
        codeRow.classList.remove('active');
    }
}

}
