const url = 'http://mobile-shop-api.hiring.devebs.net/products';
fetch(url).then(response => {
    if(!response.ok) {
        throw new Error('Нет ответа, ошибка:' + response.statusText)
    }
    return response.json();
}).then(data => {
    const dataArray = data.results ;
    console.log(dataArray);
    const filteredData = dataArray.map(results => ({
        name: results.name,
        price: results.price
    }));
    console.log(filteredData);
    const container = document.getElementById(`sendId`);
    filteredData.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = `Name: ${product.name}, Price: ${product.price}`;
        const button = document.createElement('button');
        button.textContent = `Выбрать`
        button.addEventListener('click', () => {
            console.log(`Name: ${product.name}, Price: ${product.price}`);
        });
        productElement.appendChild(button);
        container.appendChild(productElement);
    });
}).catch(error => {
    console.error('Проблема с функцией fetch' + error);
});