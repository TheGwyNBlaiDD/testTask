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
}).catch(error => {
    console.error('Проблема с функцией fetch' + error);
});