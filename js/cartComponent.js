Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: `<div v-show="visibility" class="cart-block"> 
                    <ul class="cart-block__list">
                        <cart-item v-for="item of cartItems" :cartItem="item" :key="item.id">
                        </cart-item>
                    </ul>
                </div>`
});
Vue.component('cart-item', {
    props: ['cartItem'],
    template: `<li class="cart-block__list-item">
                    <div class="cart-block__item-product">
                        <img class="cart-block__img" :src="cartItem.img" alt="">
                        <div class="cart-block__product-desc">
                            <p class="cart-block__desc-title">{{ cartItem.title }}</p>
                            <p class="cart-block__desc-quantity">Quantity:{{ cartItem.quantity }}</p>
                            <p class="cart-block__desc-single-price">{{ cartItem.price }} рублей</p>
                        </div>
                    </div>
                    <div class="cart-block__right-block">
                        <p class="cart-block__product-price">{{ cartItem.price*cartItem.quantity }} рублей
                        </p>
                        <button @click="$parent.$emit('remove', cartItem)" class="cart-block__del-btn">
                            <img src="img/nav__img-cross.png" alt="">
                        </button>
                    </div>
                </li>`
});