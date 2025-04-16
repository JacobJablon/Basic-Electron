
window.addEventListener('DOMContentLoaded', () => {

    const node_span = document.querySelector("#node-version");
    if (node_span) {
        node_span.innerHTML = process.versions['node'];
    }

});