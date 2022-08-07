/* eslint-disable no-lone-blocks */
// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
    type SomeType = string | number
    type EventHandler = (e: MouseEvent) => void;

    const stringVariable: SomeType = 'paspausta!' as string;
    const divVariable: SomeType = '&#9726;' as string;
    const NumberVariable: SomeType = 20 as number;
    // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
      const bodyHtml = document.querySelector('body');
      const button = document.createElement('button') as HTMLButtonElement;
      bodyHtml?.append(button);
      button.setAttribute('id', 'button');
      const buttonElement: HTMLElement = document.getElementById('button') as HTMLElement;
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
      const selectButton: HTMLButtonElement = document.getElementById('divbutton') as HTMLButtonElement;
      selectButton.onclick = (e) => {
        e.preventDefault();
        const selectDiv: HTMLDivElement = document.getElementById('divas') as HTMLDivElement;
        selectDiv.innerHTML += `${divVariable}`;
      };
    }
    console.groupEnd();

    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
      const selectPrgh: HTMLParagraphElement = document.getElementById('kvadrateliai') as HTMLParagraphElement;

      let sqCount: number = 0;
      const inSqCount: EventHandler = () => {
        // eslint-disable-next-line no-plusplus
        sqCount++;
        selectPrgh.innerHTML = `Kvadratuku skaičius -> ${sqCount}`;
      };
      const selectButton: HTMLButtonElement = document.getElementById('divbutton') as HTMLButtonElement;
      selectButton.addEventListener('click', inSqCount);
    }
    console.groupEnd();
}
console.groupEnd();
