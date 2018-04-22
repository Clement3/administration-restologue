const AUTH_API = 'http://localhost:3000/api/auth';
const APP_API = 'http://localhost:4000/api/cartes';

$(document).ready(function () {

});


function login(username, password) {
    $.ajax({
        method: 'POST',
        dataType: 'json',
        url: AUTH_API + '/login',
        data: { username: username, password: password }
    })
    .done(function (response) {
        sessionStorage.setItem('token', response.data);
    })
    .fail(function (error) {
        console.log(error)
    });    
}

function logout() {
    let token = sessionStorage.getItem('token');

    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: AUTH_API + '/logout?token=' + token
    })
    .done(function (response) {
        sessionStorage.removeItem('token');
    })
    .fail(function (error) {
        console.log(error)
    }); 
}

function isConnected() {
    let token = sessionStorage.getItem('token');
    let connected = false;

    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: AUTH_API + '/connected?token=' + token
    })
    .done(function (response) {
        connected = true;
    })
    .fail(function (error) {
        connected = false;
    });

    return connected;
}


/*
$( document ).ready(function () {
    connected();
    getCartes();

    $('#nameCarte').val('');

    $('.login').submit(function (e) {
        e.preventDefault();
        let formUsername = $('#username').val();
        let formPassword = $('#password').val();

        login(formUsername, formPassword);
    });

    $('.addCarte').submit( function (e) {
        e.preventDefault();

        let formName = $('#nameCarte').val();

        addCarte(formName);
    });
});

function getCartes() {
    $.ajax({
        method: "GET",
        dataType: "json",
        url: "http://localhost:5000/cartes/all"
    })
    .done( function (response) {
        console.log(response)
        for (let i in response.data) {
            $('<div class="col"><div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title" id="carteNom-'+ i +'">').appendTo('#cartes');
            $('#carteNom-' + i).text(response.data[i].nom);
        }
    })
    .fail( function (error) {
        console.log(error);
    });
}

function addCarte(formName) {
    $.ajax({
        method: "POST",
        dataType: "json",
        url: "http://localhost:5000/cartes/create",
        data: { nom: formName }
    })
    .done( function (response) {
        $('#addCarte').modal('hide');
    })
    .fail( function (error) {
        console.log(error);
    });
}

function deleteCarte(id) {
    $.ajax({
        method: "DELETE",
        dataType: "json",
        url: "http://localhost:5000/cartes/" + id + "/delete"
    })
    .done ( function (response) {
        console.log(response)
    })
    .fail( function (error) {
        console.log(error)
    })
}

function showCarte(id) {
    $.ajax({
        method: "GET",
        dataType: "json",
        url: "http://localhost:5000/cartes/" + id + "/show"
    })
    .done (function (response) {
        console.log(response)
    })
    .fail( function (error) {
        console.log(error)
    })
}

function login(formUsername, formPassword) {
    $.ajax({
        method: "POST",
        dataType: 'json',
        url: "http://localhost:4000/verify",
        data: { username: formUsername, password: formPassword }
    })
    .done( function (response) {
        alert(response.message, "alert-success", ".login")
        setTimeout(function () {
            $('#login').modal('hide');
        }, 2000);
    })
    .fail( function(error) {
        alert(error.responseJSON.message, "alert-danger", ".login")
    });
}

function connected() {
    $.ajax({
        method: "GET",
        dataType: 'json',
        url: "http://localhost:4000/connected"
    })
    .done( function (response) {
        $('#login').modal('hide');
    })
    .fail( function(error) {
        $('#login').modal({backdrop: 'static', keyboard: false});
    });
}

function alert(message, type, parent) {
    if ($('.alert').length) {
        $('.alert').remove();
    }

    let alert = $('<div class="alert animated bounceIn">' + message + '</div>').prependTo(parent);
    alert.addClass(type);

    setTimeout( function() {
        $('.alert').remove();
    }, 5000);
}*/