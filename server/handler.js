const cart = require('./cart');     //импортировали модуль cart
const fs = require('fs');

const actions = {       //возможные действия
    add: cart.add,      //добавление товаров
    change: cart.change     //изменение товаров
};

let handler = (req, res, action, file) => {         // *!* принимаем параметры функции handler из файла cartRouter.js (из стр.15-20)
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            let newCart = actions[action](JSON.parse(data), req);
            fs.writeFile(file, newCart, (err) => {
                if (err) {
                    res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
                } else {
                    res.send(JSON.stringify({ result: 1 }))   //возвращаем обновленную строку в файле userCart.json
                }
            })
        }
    })
};

module.exports = handler;