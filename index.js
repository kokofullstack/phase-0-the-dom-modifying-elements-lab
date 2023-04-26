const main = document.getElementById('main');
    const newHeader = document.createElement('h1');
    main.remove();
    newHeader.id= 'victory';
    newHeader.textContent = 'Baker is the champion';
    document.body.append(newHeader);