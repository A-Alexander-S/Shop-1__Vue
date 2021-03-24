Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: []
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.title));
        },
        // filterByCategory(id) {
        //     if (id == 0) {
        //         this.filtered = this.products;
        //     } else {
        //         this.filtered = this.products.filter(el => el.category == id);
        //     }
        // }
    },
    template: ` <ul class="fetured__flex">

                <product v-for="item of filtered" 
                    :product="item"
                    :key="item.id"
                    @add-product="$parent.$refs.cart.addProduct">
                </product>

                </ul>`
});
Vue.component('product', { //@click="$root.addProduct(product)"
    props: ['product'],
    template: `<li class="fetured__item" >
                    <div class="fetured__item-hover">
                        <img :src="product.img" class="fetured-img" width="360" height="420" alt="Мужчина">
                        <div class="fetured__item-overlay"></div>
                        <button @click="$emit('add-product', product)" 
                                type="button" class="fetured__item-button"><img
                                src="img/fetured__btn-basket.svg" class="fetured__item-pic-basket"
                                alt="Кнопка добавления в корзину"> Add to Cart
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