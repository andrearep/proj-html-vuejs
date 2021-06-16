
const app = new Vue({
    el: '#app',
    data: {
        navbarIndex: 0,
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
        ],
        welcomeIndex: 0,
        welcomeText: [
            {

                content: 'Our philosophy is learning through play as we offer a stimulating enviroment for children',
                img_path1: './dist/img/welcome_fable/clock_alt.png',
                title1: 'Full Day Sessions',
                paragraph1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex!',
                img_path2: './dist/img/welcome_fable/diagram_alt.png',
                title2: 'Full Day Sessions',
                paragraph2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex!'
            },
            {

                content: 'Our philosophy is learning through play as we offer a stimulating enviroment for children!',
                img_path1: './dist/img/welcome_fable/clock_alt.png',
                title1: 'Full Day Sessions',
                paragraph1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex!',
                img_path2: './dist/img/welcome_fable/clock_alt.png',
                title2: 'Full Day Sessions',
                paragraph2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex!'
            }
        ]


    },
    methods: {
        selected: function selected(e) {
            return this.navbarIndex = (e.currentTarget.getAttribute('data-number'));
        },
        welcomeSelect: function welcomeSelect(e) {
            console.log(e.currentTarget.getAttribute('class'));
            if (e.currentTarget.getAttribute('class') == 'selected') {
                return false;
            } else if (this.welcomeIndex) {
                return this.welcomeIndex--;
            } else return this.welcomeIndex++;
        }


    },
    mounted() {

    }
})