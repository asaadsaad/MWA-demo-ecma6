function giveMePizza() {
    console.log(`Order Received`)
    return new Promise(function (resolve, reject) {
        console.log(`Working on Pizza`)
        setTimeout(() => {
            console.log(`Preparing Pizza`)
            resolve('Neapolitan')
            console.log(`Baking Pizza`)
        }, 5000);
        console.log(`Pizza is ready`)
    });
}

giveMePizza()
    .then((data) => `Results: ${data}`)
    .then((data) => `${data}!`)
    .then((data) => console.log(data))
    .catch((err) => console.log('Sorry: ' + err))

console.log('I will continue my life, until the pizza is ready')
