const searchInput = document.querySelector('#search-input');
const autoCompleteList = document.querySelector('#auto-complete');
const autoCompleteDiv = document.querySelector('.auto-complete');
const profile = document.querySelector('.profile');
const profileList = document.querySelector('.profile-list');
const guestsElement = document.querySelector('#guests-element');
const roomsGuests = document.querySelector('.rooms-guests');
const formSubmit = document.querySelector('form');
const allPlaces = [
    {
        city: "Damascus",
        province: "Damascus",
        country: "Syria",
        popular: false,
        icon: "./city.png",
        line: "Damascus, Damascus, Syria"
    },
    {
        city: "Amsterdam",
        province: "North Holland",
        country: "Netherlands",
        popular: true,
        icon: "./pin.png",
        line: "Amsterdam, North Holland, Netherlands"
    },
    {
        city: "Rotterdam",
        province: "South Holland",
        country: "Netherlands",
        popular: false,
        icon: "./pin.png",
        line: "Rotterdam, South Holland, Netherlands"
    },
    {
        city: "Rio de Janeiro",
        province: "Rio de Janeiro",
        country: "Brazil",
        popular: false,
        icon: "./airport.png",
        line: "Rio de Janeiro, Rio de Janeiro, Brazil"
    },
    {
        city: "Amman",
        province: "Amman",
        country: "Jordan",
        popular: false,
        icon: "./city.png",
        line: "Amman, Amman, Jordan"
    },
    {
        city: "Saint Petersburg",
        province: "Saint Petersburg",
        country: "Russia",
        popular: false,
        icon: "./pin.png",
        line: "Saint Petersburg, Saint Petersburg, Russia"
    }
];

function showProfileList(event){
    event.stopPropagation();
    profileList.classList.add('profile-list-show')
}

function findMatches(input,places){
    return places.filter(place => {
        const regex = new RegExp(input,'gi');
        return place.city.match(regex)
    });
}

function display(){
    const matches = findMatches(this.value,allPlaces);
    matches.splice(5);
    const listOfMatches = matches.map(match => {
        return `<li class="matches-elem">${match.city}</li>`
    }).join("");
    autoCompleteDiv.classList.add('show-auto-complete');
    autoCompleteList.innerHTML = listOfMatches;
}

function select(e){
    const text =  e.target.innerHTML;
    searchInput.value = text;
    autoCompleteDiv.classList.remove('show-auto-complete');
}

$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

$( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    console.log( $( this ).serialize() );
});

searchInput.addEventListener('keyup', display);
autoCompleteList.addEventListener('click', select);
profile.addEventListener('click',showProfileList)

/*searchInput.addEventListener('blur', function( event ) {
    autoCompleteDiv.classList.remove('show-auto-complete');  
  }, true);*/
guestsElement.addEventListener('click', function(event) {
    event.stopPropagation();
    roomsGuests.classList.add('show-rooms-guests');
});

document.onclick = function(){
    profileList.classList.remove('profile-list-show');
    roomsGuests.classList.remove('show-rooms-guests');
    autoCompleteDiv.classList.remove('show-auto-complete');
}


