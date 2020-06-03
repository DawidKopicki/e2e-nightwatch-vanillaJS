const firstButton = document.querySelector("aside button:nth-child(1)");
const secondButton = document.querySelector("aside button:nth-child(2)");
const paragraph = document.querySelector('.main-content');
const mainSection = document.querySelector('main');
const modal = document.querySelector('main .modal');
const modalCloseButton = document.querySelector('.modal__frame-header-close');
const modalOkButton = document.querySelector('main .modal__frame-footer button');

const data = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters": {
        "batter": [{
                "id": "1001",
                "type": "Regular"
            },
            {
                "id": "1002",
                "type": "Chocolate"
            },
            {
                "id": "1003",
                "type": "Blueberry"
            },
            {
                "id": "1004",
                "type": "Devil's Food"
            }
        ]
    }
};

const changeTextAfterClick = () => {
    const paragraphContent = `This is text after click on first button.`;
    const modalButton = document.querySelector('.main-button');

    // Checking if in main section is a button or text
    if (document.contains(modalButton)) {
        // Creating new parahraph element with specific text and class
        const newParagraph = document.createElement('p');
        newParagraph.textContent = paragraphContent;
        newParagraph.className = 'main-content';

        // Removing from main section button and adding a paragraph
        mainSection.removeChild(modalButton);
        mainSection.appendChild(newParagraph);
    } else if (paragraph.textContent === paragraphContent) {
        // User should use this button only once
        alert('You can do that only once!')
    } else {
        // Changing text in paragraph
        paragraph.textContent = paragraphContent;
    }
}

const replaceTextWithButton = (dataLoading) => {
    const modalButton = document.querySelector('.main-button');

    if (document.contains(document.querySelector('.main-content'))) {
        // Creating modal button
        const modalButton = document.createElement('button');
        modalButton.className = 'main-button';
        modalButton.innerText = "Click it!";

        // Removing old content and adding created button to main section
        document.querySelector('.main-content').remove();
        mainSection.appendChild(modalButton);

        // Opening a modal
        modalButton.addEventListener('click', () => {
            modal.style.display = 'block';

            const modalContent = document.querySelector('.modal__frame-content');
            const modalContentParagraph = document.querySelector('.modal__frame-content p');
            // Creating element for JSON data
            const preElement = document.createElement('pre');
            modalContent.appendChild(preElement);

            // Fake loading
            document.body.style.cursor = 'wait';

            // if (dataLoading) {
            setTimeout(() => {
                document.body.style.cursor = 'default';
                // Removing loading text and adding JSON data
                modalContent.removeChild(modalContentParagraph);
                preElement.textContent = JSON.stringify(data, null, 4);
            }, 1000);
            // }


            // Closing modal after clicking outside it
            window.addEventListener('click', e => e.target === modal ? closeModal() : null);
        });
    } else if (document.contains(modalButton)) {
        alert('You can do that only once!')
    }

}

const closeModal = (dataLoading) => {
    modal.style.display = 'none';

    // dataLoading = false;
    // Removing JSON data 
    const modalContent = document.querySelector('.modal__frame-content');
    const modalContentPre = document.querySelector('.modal__frame-content pre');
    modalContent.removeChild(modalContentPre);

    // Adding "loading" information
    const modalContentParagraph = document.createElement('p');
    modalContentParagraph.textContent = 'Loading...';
    modalContent.appendChild(modalContentParagraph);
}

firstButton.addEventListener('click', changeTextAfterClick);
secondButton.addEventListener('click', replaceTextWithButton);
modalCloseButton.addEventListener('click', closeModal);
modalOkButton.addEventListener('click', closeModal);