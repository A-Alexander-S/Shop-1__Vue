Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
            imgProduct: 'https://placehold.it/200x150'
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
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: ` <ul class="fetured__flex">

    <product v-for="product of filtered" :product="product" :key="product.id">
    </product>

    </ul>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<li class="fetured__item" >
    <div class="fetured__item-hover">
        <img :src="product.img" class="fetured-img" width="360" height="420" alt="Мужчина">
        <div class="fetured__item-overlay"></div>
        <button  @click="$parent.$parent.$refs.cart.addProduct(product)"
        type="button" class="fetured__item-button"><img
                src="img/fetured__btn-basket.svg" class="fetured__item-pic-basket"
                alt="Кнопка добавления в корзину"> Add to
            Cart
        </button>
    </div>
    <div class="fetured__features">
        <h3 class="fetured__h3">{{ product.product_name }}</h3>
        <p class="fetured__desc">Known for her sculptural takes on traditional tailoring,
            Australian arbiter of cool
            Kym Ellery teams up with Moda Operandi.</p>
        <p class="fetured__price">{{ product.price }} рублей</p>
    </div>
</li>
            
    `
})
{/* <div class="products">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img="imgProduct"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </div> */}

        //        <div class="product-item">
        //        <img :src="img" alt="Some img">
        //        <div class="desc">
        //            <h3>{{product.product_name}}</h3>
        //            <p>{{product.price}}</p>
        //            <button class="buy-btn" @click="$emit('add-product', product)">Купить</button>
        //        </div>
        //    </div>              