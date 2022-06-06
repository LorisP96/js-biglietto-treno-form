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
        } else if(userAge === 'over') {
            discount = userPrice * 40 / 100;
        }

        let finalPrice = userPrice - discount;

        let humanPrice = finalPrice.toFixed(2);

        document.querySelector('.hidden').classList.add('active');

        document.getElementById('user-name-result').innerHTML = userName;

        document.getElementById('user-price-result').innerHTML = `Il prezzo del tuo biglietto è ${humanPrice} €`;         
    }
);

const annButton = document.getElementById('annulla');

annButton.addEventListener('click',
    function() {
        document.querySelector('.hidden').classList.remove('active');
    }
);


