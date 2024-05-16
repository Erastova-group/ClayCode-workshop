function generateHeader() {
    let oldDiv = document.getElementById('title');
    let title = oldDiv.textContent;

    let div = document.createElement('div');
    div.className = 'box';

    let h1 = document.createElement('h1');
    h1.id = 'title';
    h1.textContent = title;
    div.appendChild(h1);

    let pContact = document.createElement('p');
    pContact.innerHTML = '<strong>Contact:</strong><br/> Hannah Pollak (<a href="mailto:H.pollak@sms.ed.ac.uk">H.pollak@sms.ed.ac.uk</a>)<br/><a href="https://github.com/Erastova-group/ClayCode">github.com/Erastova-group/ClayCode</a>';
    div.appendChild(pContact);
    oldDiv.parentNode.replaceChild(div, oldDiv);
}
