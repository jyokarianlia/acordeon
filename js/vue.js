const index = {
    data () {
        return {
            visible: '',
            visible2: '',
            visible3: '',
            visible4: '',
            visible5: '',
            b: '',
            b2: '',
            b3: '',
            b4: '',
            b5: ''
        }
    },
    methods: {
        actualizarClase(radio) {
            switch (radio) {
                case 1:
                    this.visible = 'ansW';
                    this.visible2 = '';
                    this.visible3 = '';
                    this.visible4 = '';
                    this.visible5 = '';
                    this.b = 'b';
                    this.b2 = '';
                    this.b3 = '';
                    this.b4 = '';
                    this.b5 = '';
                    break;
                case 2:
                    this.visible = '';
                    this.visible2 = 'ansW2';
                    this.isible3 = '';
                    this.visible4 = '';
                    this.visible5 = '';
                    this.b = '';
                    this.b2 = 'b2';
                    this.b3 = '';
                    this.b4 = '';
                    this.b5 = '';
                break;
                case 3:
                    this.visible = '';
                    this.visible2 = '';
                    this.visible3 = 'ansW3';
                    this.visible4 = '';
                    this.visible5 = '';
                    this.b = '';
                    this.b2 = '';
                    this.b3 = 'b3';
                    this.b4 = '';
                    this.b5 = '';
                    break;
                case 4:
                    this.visible = '';
                    this.visible2 = '';
                    this.visible3 = '';
                    this.visible4 = 'ansW4';
                    this.visible5 = '';
                    this.b = '';
                    this.b2 = '';
                    this.b3 = '';
                    this.b4 = 'b4';
                    this.b5 = '';
                    break;
            
                case 5:
                    this.visible = '';
                    this.visible2 = '';
                    this.visible3 = '';
                    this.visible4 = '';
                    this.visible5 = 'ansW5';
                    this.b = '';
                    this.b2 = '';
                    this.b3 = '';
                    this.b4 = '';
                    this.b5 = 'b5';
                    break;
            }
        }
    }
}

Vue.createApp(index).mount('#app')