function  customRender(reactElment,container){
    const domElement = document.createElement
    (reactElment.type)
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target' , reactElement.props.target);
    for(const prop in reactElement.props){
        if(prop === 'chidren' ) continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {

    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
     children: "click me to visit google"

}
const maincontainer = document.querySelector("#root");

customRender(reactElement,maincontainer)