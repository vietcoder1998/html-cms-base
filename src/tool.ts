export function createElementFromHTML(htmlString?: string) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}

export function addScript(url?: string, dom?: ChildNode) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    dom.appendChild(script);

    return dom
}