
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
                img_path1: './dist/img/welcome_fable/diagram_alt.png',
                title1: 'Full Day Sessions',
                paragraph1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex!',
                img_path2: './dist/img/welcome_fable/clock_alt.png',
                title2: 'Full Day Sessions',
                paragraph2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex!'
            }
        ],
        indexSlider1: 0,
        slider1_img: [
            './dist/img/welcome_fable/welcome_slider/gallery_01-690x506.jpg',
            './dist/img/welcome_fable/welcome_slider/gallery_02-690x506.jpg',
            './dist/img/welcome_fable/welcome_slider/gallery_03-690x506.jpg'
        ],
        indexFooter1: 0,
        footer_slide1: [
            'background-image: url("./dist/img/welcome_fable/footer_slider/parallax_01.jpg")',
            'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi1.jpg")',
            'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi6.jpg")',
            'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi2.jpg")',
            'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi3.jpg")',
            'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi4.jpg")',
            'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi6.jpg")'

        ],
        indexFooter2: 2,
        footer_slide2: [
            {
                quotation: "La maggior parte delle persone sono altre persone. I loro pensieri sono opinioni di qualcun altro, la loro vita un’imitazione, le loro passioni una citazione.",
                name: 'Oscar Wilde'
            },
            {
                quotation: "Se pensi in termini di anni, pianta il riso.Se pensi in termini di decenni, pianta alberi.Se pensi in termini di centinaia di anni, insegna alla gente.",
                name: 'Confucio'
            },
            {
                quotation: "Fable Kindergarten is a great place for my daughter to start her schooling experience. It's welcoming and safe and my daughter loves being there.",
                name: 'Joe R. Hamblen'
            },
            {
                quotation: "Ci sono due diversi tipi di persone nel mondo, coloro che vogliono sapere, e coloro che vogliono credere.",
                name: 'Friedrich Nietzsche'
            },
            {
                quotation: "Amo i solitari, i diversi, quelli che non incontri mai. Quelli persi, andati, spiritati, fottuti. Quelli con l’anima in fiamme.",
                name: 'Charles Bukowski'
            },
            {
                quotation: "Tutto l’universo cospira affinché chi lo desidera con tutto se stesso possa riuscire a realizzare i propri sogni.",
                name: 'Paulo Coelho'
            },
        ]


    },
    methods: {
        selected: function selected(e) {
            return this.navbarIndex = (e.currentTarget.getAttribute('data-number'));
        },
        selectedSlider1: function selected(e) {
            return this.indexSlider1 = (e.currentTarget.getAttribute('data-number'));
        },
        welcomeSelect: function welcomeSelect(e) {
            console.log(e.currentTarget.getAttribute('class'));
            if (e.currentTarget.getAttribute('class') == 'selected') {
                return false;
            } else if (this.welcomeIndex) {
                return this.welcomeIndex--;
            } else return this.welcomeIndex++;
        },
        next: function () {
            if (this.indexSlider1 < this.slider1_img.length - 1) {
                return this.indexSlider1++;
            } else return this.indexSlider1 = 0;
        },
        previous: function () {
            if (this.indexSlider1 > 0) {
                return this.indexSlider1--;
            } else return this.indexSlider1 = this.slider1_img.length - 1;
        },
        nextFooter1: function () {
            if (this.indexFooter1 < this.footer_slide1.length - 1) {
                return this.indexFooter1++;
            } else return this.indexFooter1 = 0;
        },
        previousFooter1: function () {
            if (this.indexFooter1 > 0) {
                return this.indexFooter1--;
            } else return this.indexFooter1 = this.footer_slide1.length - 1;
        },
        nextFooter2: function () {
            if (this.indexFooter2 < this.footer_slide2.length - 1) {
                return this.indexFooter2++;
            } else return this.indexFooter2 = 0;
        },
        previousFooter2: function () {
            if (this.indexFooter2 > 0) {
                return this.indexFooter2--;
            } else return this.indexFooter2 = this.footer_slide2.length - 1;
        },
        scroll_to_top: function () {
            window.scrollTo(0, 0);
        }


    },
    mounted() {

    }
})

