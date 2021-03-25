Vue.component('products', {
    // components: { product },
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: []
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        // this.$parent.getJson(`getProducts.json`)
        //     .then(data => {
        //         for (let el of data) {
        //             this.products.push(el);
        //             this.filtered.push(el);
        //         }
        //         console.log(this.filtered)
        //     });
    },
    methods: {
        filter(val) {
            let regExp = new RegExp(val, 'i');
            this.filtered = this.products.filter(el => regExp.test(el.title))
        }
    },
    template: ` <ul class="fetured__flex">

                <product v-for="product of filtered" :product="product" :key="product.id">
                </product>

                </ul>`
});
Vue.component('product', { //@click="$root.addProduct(product)"
    props: ['product'],
    template: `<li class="fetured__item" >
                    <div class="fetured__item-hover">
                        <img :src="product.img" class="fetured-img" width="360" height="420" alt="Мужчина">
                        <div class="fetured__item-overlay"></div>
                        <button  @click="$root.$refs.cart.addProduct(product)"
                        type="button" class="fetured__item-button"><img
                                src="img/fetured__btn-basket.svg" class="fetured__item-pic-basket"
                                alt="Кнопка добавления в корзину"> Add to
                            Cart
                        </button>
                    </div>
                    <div class="fetured__features">
                        <h3 class="fetured__h3">{{ product.title }}</h3>
                        <p class="fetured__desc">Known for her sculptural takes on traditional tailoring,
                            Australian arbiter of cool
                            Kym Ellery teams up with Moda Operandi.</p>
                        <p class="fetured__price">{{ product.price }} рублей</p>
                    </div>
                </li>`
});