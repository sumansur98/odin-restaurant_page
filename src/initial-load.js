
const createHeader = ()=>{

    const headerEle = document.createElement('header');
    
    const h1Ele = document.createElement('h1')
    h1Ele.textContent = 'Rollacosta';
    headerEle.appendChild(h1Ele);
    
    return headerEle;

}

const loadInitialPage = () => {
    document.getElementById('content').appendChild(createHeader());
}

export default loadInitialPage;