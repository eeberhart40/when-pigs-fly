import _ from 'lodash';
function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

    //document.body.style.backgroundImage = "url('https://image.freepik.com/free-vector/farm-with-barn_1196-526.jpg')";

}

document.body.appendChild(component());