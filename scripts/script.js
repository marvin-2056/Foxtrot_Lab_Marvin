document.addEventListener('DOMContentLoaded', function() {
    // Function to load resources into the DOM from a data object
    function loadResources() {
        const resources = ['Resource 1', 'Resource 2', 'Resource 3'];


        const resourcesList = document.querySelector('#resources ul');
        resources.forEach(resource => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = resource;
            listItem.appendChild(link);
            resourcesList.appendChild(listItem);
        });
    }

    // Call the function to load resources
    loadResources();
});
