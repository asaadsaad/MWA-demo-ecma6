function giveMePizza() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Neapolitan')
        }, 5000);
    });
}

giveMePizza()
    .then((data) => `Results: ${data}`)
    .then((data) => `${data}!`)
    .then((data) => console.log(data))
    .catch((err) => console.log('Sorry: ' + err))

console.log('I will continue my life, until the pizza is ready')