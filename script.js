function expandImage() {
    var expandedImageContainer = document.getElementById('expandedImageContainer');
    var expandedImage = document.getElementById('expandedImage');
    
    expandedImageContainer.style.display = 'block';
    expandedImage.style.borderRadius = '0';  // Set the border-radius to 0 to make the image rectangular
}

function closeExpandedImage() {
    var expandedImageContainer = document.getElementById('expandedImageContainer');
    var expandedImage = document.getElementById('expandedImage');
    
    expandedImageContainer.style.display = 'none';
    expandedImage.style.borderRadius = '50%';  // Reset the border-radius back to 50% for the circular image
}

function activateTab(tab, tabName) {
    var tabs = document.querySelectorAll('#sidebar li');
    var tabContents = document.querySelectorAll('.tab-pane');

    // Remove 'active' class from all tabs
    tabs.forEach(function (item) {
        item.classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    tab.classList.add('active');

    // Hide all tab contents
    tabContents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabName.toLowerCase() + 'Content').classList.add('active');
}

function showTabContent(tabName) {
    var tabContents = document.querySelectorAll('.tab-pane');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });
    document.getElementById(tabName.toLowerCase() + 'Content').style.display = 'block';
}

function updateTabMessage(tabName) {
    var tabMsg = document.getElementById('tabMsg');
}

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
}
