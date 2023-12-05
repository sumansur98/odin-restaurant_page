
const createHeader = ()=>{

    const headerEle = document.createElement('header');
    
    const h1Ele = document.createElement('h1')
    h1Ele.textContent = 'Rollacosta';
    headerEle.appendChild(h1Ele);
    headerEle.appendChild(createNav());
    headerEle.classList.add('header');
    return headerEle;

}

const createNav = ()=>{
    const navEle = document.createElement('ul');

    const homeEle = document.createElement('li');
    homeEle.textContent = 'Home'

    const menuEle = document.createElement('li');
    menuEle.textContent = 'Menu'

    const contactEle = document.createElement('li');
    contactEle.textContent = 'Contact'

    navEle.appendChild(homeEle)
    navEle.appendChild(menuEle)
    navEle.appendChild(contactEle);
    navEle.classList.add('navbar');

    return navEle;
}

const loadInitialPage = () => {
    const contentDiv = document.getElementById('content')
    contentDiv.appendChild(createHeader());
    
    const mainDiv = document.createElement('div')
    mainDiv.id = 'mainContentDiv'
    contentDiv.appendChild(mainDiv);
}

export default loadInitialPage;