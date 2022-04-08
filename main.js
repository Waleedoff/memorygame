
// Start With Control-Buttons
document.querySelector('.control-buttons span').onclick = function () {
    let YourName = prompt('Enter Your Name');
    if (YourName == null || YourName == "") {
        document.querySelector('.name span').innerHTML = "Unknown";
    }
    else 
    {
        document.querySelector('.name span').innerHTML = YourName;
    }
    
    document.querySelector('.control-buttons ').remove();
};

// End  Control-Buttons


let duration = 1000;
let blockscontainer = document.querySelector('.memory-game-blocks');
let blocks = Array.from(blockscontainer.children);
// console.log(blocks);

let orderrange = Array(blocks.length).keys();
console.log(orderrange);

// let orderRange   = [...Array(blocks.length).keys()]; /** Here make it array to show keys of blocks Array  */
// console.log(orderRange);

