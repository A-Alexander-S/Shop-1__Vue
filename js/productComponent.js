Vue.component('products', {
    props: ['products'],
    template: ` <ul class="fetured__flex">

                <product v-for="item of products" :product="item":key="item.id">
                </product>

                </ul>`
});
Vue.component('product', { //@click="$root.addProduct(product)"
    props: ['product'],
    template: `<li class="fetured__item" >
                    <div class="fetured__item-hover">
                        <img :src="product.img" class="fetured-img" width="360" height="420" alt="Мужчина">
                        <div class="fetured__item-overlay"></div>
                        <button @click="$parent.$emit('add-product', product)" 
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