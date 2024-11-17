
// Check if the browser is WebKit-based
if (navigator.userAgent.toLowerCase().indexOf('webkit') > -1) {
    // Add a class to the table container to hide the scrollbar
    document.querySelector('.table-container').classList.add('hide-scrollbar');
}
