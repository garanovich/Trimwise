document.addEventListener('DOMContentLoaded', () => {
    const batchSizeRange = document.getElementById('batchSizeRange');
    const batchSizeValue = document.getElementById('batchSizeValue');
    const saveButton = document.getElementById('saveButton');

    // Load and apply saved settings
    chrome.storage.sync.get('batchSize', (data) => {
        if (data.batchSize) {
            batchSizeRange.value = data.batchSize;
            batchSizeValue.textContent = `${data.batchSize} messages`;
        }
    });

    // Update displayed value when range input changes
    batchSizeRange.addEventListener('input', () => {
        batchSizeValue.textContent = `${batchSizeRange.value} messages`;
    });

    // Save settings when button is clicked
    saveButton.addEventListener('click', () => {
        const selectedSize = batchSizeRange.value;
        chrome.storage.sync.set({ batchSize: selectedSize }, () => {
            alert('Settings saved. Please reload the chat page for changes to take effect.');
        });
    });
});

