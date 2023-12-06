import loadHome from "./load-home";
import loadMenu from "./load-menu";
import loadContact from "./load-contact";
//import Restaurant from './restaurant.jpg'

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
    homeEle.addEventListener('click', ()=>{
        loadHome();
    })

    const menuEle = document.createElement('li');
    menuEle.textContent = 'Menu'
    menuEle.addEventListener('click',()=>{
        loadMenu();
    })

    const contactEle = document.createElement('li');
    contactEle.textContent = 'Contact';
    contactEle.addEventListener('click', ()=>{
        loadContact();
    })

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

    const backgroundImage = new Image();
    backgroundImage.src = Restaurant;




    loadHome();
}

export default loadInitialPage;