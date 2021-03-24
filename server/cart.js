let add = (cart, req) => {          //добавляем товары в корзину
    cart.contents.push(req.body);   //обращаемся к массиву contents в файле cart.json, вставляем в верстку body //req.body - то, что приходит из нашего запроса
    return JSON.stringify(cart, null, 4);   //преобразовываем объект в строку
};
let change = (cart, req) => {       //изменяем товары в корзине
    let find = cart.contents.find(el => el.title === +req.params.id);  //ищем по id наличие товаров в корзине
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};

module.exports = {  //экспортируем модули работы с корзиной
    add,
    change
};

//req - запрос