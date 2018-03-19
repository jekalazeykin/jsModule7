  (function createLayout() {
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('keyboard');
    document.body.appendChild(parentDiv);
    const topRow = document.createElement('div')
    parentDiv.append(topRow);
    const middleRow = document.createElement('div')
    parentDiv.append(middleRow);
    const bottomRow = document.createElement('div')
    parentDiv.append(bottomRow);
    const topArr = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'];
    for (let i = 0; i <= 11; i++) {
      const buttonQ = document.createElement('button');
      buttonQ.innerText = `${topArr[i]}`;
      buttonQ.classList.add('keyboard__btn');
      topRow.append(buttonQ);
    }
    const middleArr = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"];
    for (let i = 0; i <= 10; i++) {
      const buttonA = document.createElement('button');
      buttonA.innerText = `${middleArr[i]}`;
      buttonA.classList.add('keyboard__btn');
      middleRow.append(buttonA);
    }
    const bottomArr = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
    for (let i = 0; i <= 9; i++) {
      const buttonZ = document.createElement('button');
      buttonZ.innerText = `${bottomArr[i]}`;
      buttonZ.classList.add('keyboard__btn');
      bottomRow.append(buttonZ);
    }
  })();
