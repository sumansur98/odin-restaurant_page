
const createHeader = ()=>{

    const headerEle = document.createElement('header');
    
    const h1Ele = document.createElement('h1')
    h1Ele.textContent = 'Rollacosta';
    headerEle.appendChild(h1Ele);
    headerEle.appendChild(createNav());
    
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

    navEle.appendChild(homeEle).appendChild(menuEle).appendChild(contactEle);

    return navEle;
}

const loadInitialPage = () => {
    document.getElementById('content').appendChild(createHeader());
}

export default loadInitialPage;