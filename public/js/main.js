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
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
    },
    mounted() {


    }

});