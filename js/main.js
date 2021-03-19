let buttonBurger = document.getElementById('burger');
let navigation = document.getElementById('navigation');
let introOverlay = document.querySelector('.intro__overlay');

buttonBurger.addEventListener('click', function () {
    if (document.querySelector('.intro') == null) {
        navigation.classList.toggle('display-block');
    } else {
        navigation.classList.toggle('display-block');
        introOverlay.classList.toggle('display-block');
    }
});

let closeNavigation = document.querySelector('.navigation__button-cross');

closeNavigation.addEventListener('click', function () {
    if (document.querySelector('.intro') == null) {
        navigation.classList.toggle('display-block');
    } else {
        navigation.classList.toggle('display-block');
        introOverlay.classList.toggle('display-block');
    }
});

const API = 'https://raw.githubusercontent.com/A-Alexander-S/online-api/main/responses';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showCart: false,
        catalogUrl: '/catalogData.json',
        cartItems: [],
        filtered: [],
        products: [], //все товары каталога
        catrUrl: '/getBasket.json'
        // imgProduct: 'https://placehold.it/200x150',
        // imgCart: 'https://placehold.it/50x100',
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(rezult => rezult.json())
                .catch(error => console.log(error));
        },
        addProduct(item) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(el => el.id === item.id);
                        if (find) {
                            find.quantity++;
                        } else {
                            const prod = Object.assign({ quantity: 1 }, item);
                            this.cartItems.push(prod)
                        }
                    }
                })
        },
        remove(item) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    console.log(data);
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.filtered.filter(el => regexp.test(el.title));
            if (this.userSearch == '') {
                this.filtered = [...this.products];
            }
        }
    },
    mounted() {
        this.getJson(`${API + this.catrUrl}`)
            .then(data => {
                for (let item of data) {
                    this.cartItems.push(item);
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data) {
                    this.products.push(item);
                    this.filtered.push(item);
                }
            })
        // let btn_cart = document.querySelector('.btn-cart');
        // let cart_block = document.querySelector('.cart-block');

        // btn_cart.addEventListener('click', function () {
        //     cart_block.classList.toggle('invisible');
        // });
        // this.getJson('getProducts.json')
        //     .then(data => {
        //         for (let el of data) {
        //             this.products.push(el);
        //         }
        //     });
    }
});