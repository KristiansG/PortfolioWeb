/*--Chat--*/

var n = new Date();
var year = n.getFullYear();
var month = n.getMonth() + 1;
var day = n.getDate();
var hours = n.getHours();
var min = n.getMinutes();

var date = "   " + month + "/" + day + "/" + year + "  " + hours + ":" + min;

var names_colors = {};

function get_msg_html(name, msg, date) {
    var color = names_colors[name];
    if (color == undefined) {
        color = getRandomColor();
        names_colors[name] = color;
    }
    var msg_temple = `
        <div class="message-container">
            <div class="message-body">
                <h6 style="color: ${color}; "> ${name} <span >${date} </span>  </h6>
                <p class="messageText">${msg}</p>
            </div>
        `;
    return msg_temple;
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


$('#sendBtn').on('click', function() {
    var name = $('#username').val();
    var msg = $('#message').val();

    if (name == '' || msg == '') {
        alert('Enter User Name And / Or Message')
    } else {
        $('.chat-container').append(get_msg_html(name, msg, date));
    }
    $('#message').val('');
    console.log('Name is: ' + name);
    console.log('message is: ' + msg);
});

$("#message").keydown(function(event) {
    if (event.keyCode === 13) {
        $("#sendBtn").click();
        return false;
    }
});


/*--Sign In--*/

$(document).ready(function() {
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function() {
    if ($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut();
        $('.login-info-box').fadeIn();

        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');

    } else if ($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();

        $('.white-panel').removeClass('right-log');

        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }
});

$('#logInBtn').on('click', function() {

    if ($('#username').val() == '' || $('#password').prop('checked') == '' == false) {
        alert('Please fill all fields marked with "*" ');
    } else {
        alert('Log In Successful!');
    }
});

$('#getBackPassword').on('click', function() {
    if ($('#getBackPassword').prop('clicked') == '' == false) {
        alert('New Password Has Sent To Your Email!')
    }
});

$('#regBtn').on('click', function() {

    if ($('#Regusername').val() == '' || $('#Regpassword').val() == '' || $('#RegpasswordRe').val() == '' || $('#Regemail').prop('checked') == '' == false) {
        alert('Please fill all fields marked with "*" ');
    } else if ($('#Regpassword').val().length < 8) {
        alert('Password Must Be At Least 8 Symbols');
    } else if ($('#Regpassword').val() !== $('#RegpasswordRe').val()) {
        alert('Password Doesnt Match');
    } else {
        alert('Registration Successful!');
    }
});

/*---Map---*/

function GetMap() {
    var map = new Home.Maps.Map('#myMap', {
        credentials: 'My Home',
        center: new Home.Maps.Location(56.952970, 24.046716)
    });

    var center = map.getCenter();


    var pin = new Home.Maps.Pushpin(center, {
        title: 'Home',
        subTitle: 'City Center',
        text: '1'
    });


    map.entities.push(pin);
}

/*---Converter---*/

var a = ['', 'viens ', 'divi ', 'trīs ', 'četri ', 'pieci ',
    'seši ', 'septiņi ', 'astoņi ', 'deviņi ', 'desmit ', 'vienpadsmit ',
    'divpadsmit ', 'trīspadsmit ', 'četrpadsmit ', 'piecpadsmit ', 'sešpadsmit ',
    'septiņpadsmit ', 'astoņpadsmit ', 'deviņpadsmit '
];

var b = ['', '', 'divdesmit', 'trīsdesmit', 'četrdesmit', 'piecdesmit',
    'sešdesmit', 'septiņdesmit', 'astoņdesmit', 'deviņdesmit'
];

function skaitliUzVardiem(num) {
    if ((num = num.toString()).length > 9) return 'Ārpus skaitļu robežām';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + ((Number(n[1]) > 1) ? 'miljardi ' : 'miljards ') : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + ((Number(n[2]) > 1) ? 'miljoni ' : 'miljons ') : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + ((Number(n[3]) > 1) ? 'tūkstoši ' : 'tūkstotis ') : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + ((Number(n[4]) > 1) ? 'simti ' : 'simts ') : '';
    str += (n[5] != 0) ? ((str != '') ? '' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';


    return str;
}



document.getElementById('number').onkeyup = function() {
    document.getElementById('words').innerHTML = skaitliUzVardiem(document.getElementById('number').value);
};


/*---ClickerGame---*/

function incrementFirstNumber() {
    var el = $('#totCoins');
    var totCoins = parseInt(el.text());
    var incrementedTotCoins = totCoins + 1;
    var ele = $('#CoinsToSpend');
    var currentCoins = parseInt(ele.text());
    var incrementedCoins = currentCoins + 1;
    el.text(incrementedTotCoins);
    ele.text(incrementedCoins);
}


function upgradeOne() {
    var els = $('#singleUp'),
        elem = $('#smallPrice'),
        currentMultiplier = parseInt(els.text()),
        incrementedMultiplier = currentMultiplier + 1,
        currentPrice = parseInt(elem.text()),
        incrementedPrice = currentPrice + 10,
        ele = $('#CoinsToSpend'),
        before = parseInt(ele.text()),
        after = before - currentPrice;

    if (after >= 0) {
        els.text(incrementedMultiplier);
        elem.text(incrementedPrice);
        ele.text(after);
        setInterval(incrementFirstNumber, 3000, 'totCoins', 'CoinsToSpend').innerText;
    } else {
        alert("Not Enough Coins");
    }

    
}

function bigUpgrade() {
    var els = $('#multiUp'),
        eleme = $('#bigPrice'),
        currentMultiplier = parseInt(els.text()),
        incrementedMultiplier = currentMultiplier + 1,
        currentPrice = parseInt(eleme.text()),
        incrementedPrice = currentPrice * 2,
        ele = $('#CoinsToSpend'),
        before = parseInt(ele.text()),
        after = before - currentPrice;

    if (after >= 0) {
        els.text(incrementedMultiplier);
        eleme.text(incrementedPrice);
        ele.text(after);
        setInterval(incrementFirstNumber, 1000, 'totCoins', 'CoinsToSpend').innerText;
    } else {
        alert("Not Enough Coins");
    }


    
}
