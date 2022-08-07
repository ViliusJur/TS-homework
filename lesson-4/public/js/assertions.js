"use strict";
console.group('Assertions - užduotys');
{
    const stringVariable = 'paspausta!';
    const divVariable = '&#9726;';
    const NumberVariable = 20;
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        const bodyHtml = document.querySelector('body');
        const button = document.createElement('button');
        bodyHtml?.append(button);
        button.setAttribute('id', 'button');
        const buttonElement = document.getElementById('button');
        buttonElement.innerHTML = 'CLICK ME';
        buttonElement.onclick = (e) => {
            e.preventDefault();
            const paragraphElement = document.createElement('p');
            bodyHtml?.append(paragraphElement);
            paragraphElement.innerHTML = `${stringVariable}`;
        };
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        const selectButton = document.getElementById('divbutton');
        selectButton.onclick = (e) => {
            e.preventDefault();
            const selectDiv = document.getElementById('divas');
            selectDiv.innerHTML += `${divVariable}`;
        };
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        const selectPrgh = document.getElementById('kvadrateliai');
        let sqCount = 0;
        const inSqCount = () => {
            sqCount++;
            selectPrgh.innerHTML = `Kvadratuku skaičius -> ${sqCount}`;
        };
        const selectButton = document.getElementById('divbutton');
        selectButton.addEventListener('click', inSqCount);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map