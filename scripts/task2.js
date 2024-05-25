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
        price: results.price,
        id: results.id
    }));
    console.log(filteredData);
    const container = document.getElementById(`sendId`);
    filteredData.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = `Name: ${product.name}, Price: ${product.price}`;

        const button = document.createElement('button');
        button.id = 'buttonToSelect';
        button.textContent = `Выбрать`;
        button.setAttribute("data-index", product.id);
        productElement.appendChild(button);
        container.appendChild(productElement);
    });

    

    

}).catch(error => {
    console.error('Проблема с функцией fetch' + error);
});

const selectedProduct = [];
const containerName = document.getElementById(`sendId`);
    
containerName.addEventListener('click', function(event) {
    const buttonClicked = event.target;

        if (buttonClicked && buttonClicked.id === "buttonToSelect") {
            const productId = buttonClicked.getAttribute('data-index');
            console.log(`Product ID: ${productId}`);

            buttonClicked.classList.toggle('active');
            if (buttonClicked.classList.contains('active')){
                selectedProduct.push(productId);
            }else {
                const indexInArray = selectedProduct.indexOf(productId);
                selectedProduct.splice(indexInArray);
            }
        }
    });

const buttonSend = document.querySelector(".buttonSend");
buttonSend.addEventListener('click', function() {
    const result = JSON.stringify(selectedProduct);
    console.log(result);
});