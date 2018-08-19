





//objective 1

let button = $('<button class="btn1">Click Me</button>')

$button.appendTo('body');
$('.btn1').click(function(){
    alert('How are you on this beautiful day?');
});


//objective 2
$('#btn2').click(function(){
    let msg = $(`#message`).val();
    alert(`${msg}`);
});



//objective 3
let div = $('<div></div>').appendTo('body');
$('div').height('300px');
$('div').width('300px');
$('div').hover(function () {
    $(event.currentTarget).css("background-color", "red");
}, function () {
    $(event.currentTarget).css("background-color", "black");
});


//objective 4
$('<p>Text for a paragraph.</p>').appendTo('body');

function getRandomColor() {
    let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return randColor;
};

$('p').click(function(){
    $('p').css('color', getRandomColor());
});







//objective 5
$('<div id="btnDiv"></div>').appendTo('body');
$('<button id="btn3">Click</button>').appendTo('body');
$('#btn3').click(function(){
    $('<span>Marco</span>').appendTo('#btnDiv');

});



//objective 6
var friends = ["Mikey", "Billy", "Peter", "Harry", "Larry", "Tony", "James", "Fred", "Carter", "Cecil"];

$('<button id="btn4">See Friends</button>').appendTo('body');
$('<ul id="friendList"></ul>').appendTo('body');
$('#btn4').click(function(){
    for (var f = 0; f < friends.length; f++) {
        $(`<li>${friends[f]}</li>`).appendTo('#friendList');
    }
});