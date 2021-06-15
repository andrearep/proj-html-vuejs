
const app = new Vue({
    el: '#app',
    data: {
        navbarMenu: [
            {
                name: 'Home',
                img_path: './dist/img/navbar/home.png',
                img_path_selected: './dist/img/navbar/home-2.png'
            },
            {
                name: 'Pages',
                img_path: './dist/img/navbar/document.png',
                img_path_selected: './dist/img/navbar/document-2.png'
            },
            {
                name: 'Blog',
                img_path: './dist/img/navbar/printer.png',
                img_path_selected: './dist/img/navbar/printer-2.png'
            },
            {
                name: 'Shop',
                img_path: './dist/img/navbar/cart.png',
                img_path_selected: './dist/img/navbar/cart-2.png'
            },
            {
                name: 'Shortcodes',
                img_path: './dist/img/navbar/lab.png',
                img_path_selected: './dist/img/navbar/lab-2.png'
            },
            {
                name: 'Support',
                img_path: './dist/img/navbar/chat.png',
                img_path_selected: './dist/img/navbar/chat-2.png'
            },
            {
                name: 'Contact',
                img_path: './dist/img/navbar/envelope.png',
                img_path_selected: './dist/img/navbar/envelope-2.png'
            },
        ]


    },
    methods: {

    },
    mounted() {

    }
})