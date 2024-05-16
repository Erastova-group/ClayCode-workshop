function generateHeader() {
    let logoParagraphDiv = document.createElement('div');
    logoParagraphDiv.style.display = 'flex';
    logoParagraphDiv.style.justifyContent = 'flex-start';
    logoParagraphDiv.style.alignItems = 'space-between';
    logoParagraphDiv.style.flexWrap = 'wrap';
    logoParagraphDiv.style.flexDirection = 'row';
    logoParagraphDiv.style.flexGrow = '1';
    logoParagraphDiv.style.alignItems = 'center';

    let ccLogoParagraphDiv = document.createElement('div');
    ccLogoParagraphDiv.style.display = 'flex';
    logoParagraphDiv.style.flexWrap = 'wrap';
    ccLogoParagraphDiv.style.flexDirection = 'row';
    ccLogoParagraphDiv.style.justifyContent = 'flex-start';
    ccLogoParagraphDiv.style.alignItems = 'space-between';
    ccLogoParagraphDiv.style.flexGrow = '1';
    ccLogoParagraphDiv.style.alignItems = 'baseline';

    let cc_logo = document.createElement('img');
    cc_logo.src = 'images/ClayCode_colour.png';
    cc_logo.style.width = '10rem';
    cc_logo.alt = 'ClayCode logo';
    cc_logo.style.paddingLeft = '2.5rem';
    cc_logo.style.paddingTop = '0.5rem';
    cc_logo.style.paddingBottom = '0.5rem';

    let ccp_logo = document.createElement('img');
    ccp_logo.src = 'images/logo_ccp5_short.png';
    ccp_logo.alt = 'CCP5 logo';
    ccp_logo.style.width = '7rem';
    ccp_logo.style.padding = '0.5rem';
    logoParagraphDiv.appendChild(ccp_logo);

    let cmg_logo = document.createElement('img');
    cmg_logo.src = 'images/logo_cmg.jpg';
    cmg_logo.alt = 'CMG logo';
    cmg_logo.style.width = '8rem';
    cmg_logo.style.padding = '0.5rem';
    logoParagraphDiv.appendChild(cmg_logo);

    let minsoc_logo = document.createElement('img');
    minsoc_logo.src = 'images/logo_minsoc.png';
    minsoc_logo.alt = 'MinSoC logo';
    minsoc_logo.style.width = '11rem';
    minsoc_logo.style.padding = '0.5rem';
    logoParagraphDiv.appendChild(minsoc_logo);

    let philtrans_logo = document.createElement('img');
    philtrans_logo.src = 'images/logo_philtrans.png';
    philtrans_logo.alt = 'PhilTrans logo';
    philtrans_logo.style.width = '11rem';
    philtrans_logo.style.padding = '0.5rem';
    logoParagraphDiv.appendChild(philtrans_logo);


    let bb_logo = document.createElement('img');
    bb_logo.src = 'images/logo_broadberry.png';
    bb_logo.alt = 'Broadberry logo';
    bb_logo.style.width = '9rem';
    bb_logo.style.padding = '0.5rem';
    logoParagraphDiv.appendChild(bb_logo);

    let repo_logo = document.createElement('img');
    repo_logo.src = 'images/GitHub-Mark-32px.png';
    repo_logo.alt = 'GitHub logo';

    let oldDiv = document.getElementById('title');
    let title = oldDiv.textContent;

    let div = document.createElement('div');
    div.className = 'box';

    // div.appendChild(cc_logo);
    div.appendChild(logoParagraphDiv);

    let headerParagraphDiv = document.createElement('div');
    headerParagraphDiv.style.display = 'flex';
    headerParagraphDiv.style.justifyContent = 'flex-start';
    headerParagraphDiv.style.alignItems = 'flex-start';
    headerParagraphDiv.style.flexWrap = 'wrap';
    headerParagraphDiv.style.flexDirection = 'column';

    let h1 = document.createElement('h1');
    h1.id = 'title';
    h1.textContent = title;

    div.appendChild(h1);


    let groupLogoParagraphDiv = document.createElement('div');
    groupLogoParagraphDiv.style.display = 'flex';
    groupLogoParagraphDiv.style.justifyContent = 'flex-end';
    groupLogoParagraphDiv.style.alignItems = 'space-between';
    groupLogoParagraphDiv.style.flexWrap = 'wrap';
    groupLogoParagraphDiv.style.alignItems = 'baseline';
    groupLogoParagraphDiv.style.flexDirection = 'column';

    let group_logo = document.createElement('img');
    group_logo.src = 'images/Logo_B.png';
    group_logo.alt = 'Group logo';
    group_logo.style.width = '10rem';
    group_logo.style.padding = '0.5rem';
    group_logo.style.paddingLeft = '2.5rem';

    groupLogoParagraphDiv.appendChild(group_logo);
    groupLogoParagraphDiv.appendChild(cc_logo);


    let ghLogoParagraphDiv = document.createElement('div');
    ghLogoParagraphDiv.style.display = 'flex';
    ghLogoParagraphDiv.appendChild(repo_logo);

    let subtitle = document.createElement('p');
    subtitle.innerHTML = '<a href="https://github.com/Erastova-group/ClayCode">github.com/Erastova-group/ClayCode</a>';
    subtitle.style.padding = '0.5rem';
    ghLogoParagraphDiv.appendChild(subtitle);
    headerParagraphDiv.appendChild(ghLogoParagraphDiv);

    let pContact = document.createElement('p');
    pContact.innerHTML = '<strong>Contact:</strong><br/>Hannah Pollak (<a href="mailto:H.pollak@sms.ed.ac.uk">h.pollak@sms.ed.ac.uk</a>)<br>Valentina Erastova (<a href="mailto:valentina.erastova@ed.ac.uk">valentina.erastova.ed.ac.uk</a>)<br>Sarah Stewart (<a href="mailto:s.v.stewart@sms.ed.ac.uk">s.v.stewart@sms.ed.ac.uk</a>)';
    headerParagraphDiv.appendChild(pContact);

    ccLogoParagraphDiv.appendChild(headerParagraphDiv);
    ccLogoParagraphDiv.appendChild(groupLogoParagraphDiv);
    div.appendChild(ccLogoParagraphDiv);
    oldDiv.parentNode.replaceChild(div, oldDiv);
}
