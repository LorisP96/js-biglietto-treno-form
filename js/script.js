// BOTTONE GENERA

const genButton = document.getElementById('genera');

genButton.addEventListener('click',
    function() {
        const userName = document.getElementById('user-name').value;

        const userKm = parseInt( document.getElementById('user-km').value );

        const userAge = document.getElementById('user-age').value;

        let userPrice = userKm * 0.21;

        let discount = 0

        if(userAge === 'minorenne') {

            discount = userPrice * 20 / 100;

            document.getElementById('user-offer').innerHTML = `Biglietto scontato del 20%`;

        } else if(userAge === 'over') {

            discount = userPrice * 40 / 100;

            document.getElementById('user-offer').innerHTML = `Biglietto scontato del 40%`;

        } else {

            document.getElementById('user-offer').innerHTML = `Biglietto standard`;
        }

        let finalPrice = userPrice - discount;

        let humanPrice = finalPrice.toFixed(2);

        document.querySelector('.hidden').classList.add('active');

        document.getElementById('user-name-result').innerHTML = userName;

        document.getElementById('user-price-result').innerHTML = `${humanPrice} €`; 
        
        document.getElementById('user-cab').innerHTML = Math.floor(Math.random() * 10);

        document.getElementById('user-cp').innerHTML = Math.floor(Math.random() * 100000);
    }
);

// BOTTONE ANNULLA

const annButton = document.getElementById('annulla');

annButton.addEventListener('click',
    function() {
        document.querySelector('.hidden').classList.remove('active');

        document.getElementById('user-name').value = '';

        document.getElementById('user-km').value = '';

        document.getElementById('user-age').value = 'maggiorenne';

    }
);


