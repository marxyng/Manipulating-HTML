


let btn = document.createElement('button');
let btnText = document.createTextNode('Click Me');
btn.appendChild(btnText);
document.body.appendChild(btn);

function sendAlert(){
    alert('How are you on this beautiful day?');
};

btn.addEventListener('click', sendAlert);

//objective 2
document.getElementById('btn2').addEventListener('click', function() {
    let msg = $(`#message`).val();
    alert(`${msg}`);
});

//ojective 3
let div = document.createElement('div');
document.body.appendChild(div);
div.style.height = '300px';
div.style.width = '300px';

div.addEventListener('mouseover', function(){
    div.style.backgroundColor= 'red';
});

div.addEventListener('mouseout', function(){
    div.style.backgroundColor= '';
});



//objective 4
let color = ['blue', 'red', 'brown', 'green', 'purple', 'pink', 'orange', 'yellow'];
    
function getRandomColor() {
    let randomColor = color[Math.floor(Math.random()*color.length)];
    return randomColor;
};

let paragraph = document.createElement('p');
document.body.appendChild(paragraph);
let pText = document.createTextNode("I'm so random.");
paragraph.appendChild(pText);

paragraph.addEventListener('click', function(){
    let randomColor = getRandomColor();
    paragraph.style.color = randomColor;
});




//objective 5
let btn5 = document.createElement('button');
document.body.appendChild(btn5);
let btn5Text = document.createTextNode('Click');
btn5.appendChild(btn5Text);
let divContainer = document.createElement('div');
document.body.appendChild(divContainer);

btn5.addEventListener('click', function (){
    var span = document.createElement('span');
    divContainer.appendChild(span);
    var spanText = document.createTextNode('Lonzo');
    span.appendChild(spanText);

});


//objective 6
let btn4 = document.createElement('button');
document.body.appendChild(btn4);
let btn4Text = document.createTextNode('Click');
btn4.appendChild(btn4Text);
let ul = document.createElement('ul');
document.body.appendChild(ul);

var friends = ['Sherry', 'Louise', 'Larry', 'Randall', 'Randy', 'Barry', 'Thomas', 'Timothy', 'Elliot', 'Francis'];

btn4.addEventListener('click', function(){
    for (var f = 0; f < friends.length; f++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        let liText = document.createTextNode(`${friends[f]}`);
        li.appendChild(liText);
    }

});