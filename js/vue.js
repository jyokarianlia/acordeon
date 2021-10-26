const index = Vue.createApp ({
    data () {
        return {
            preguntas: {
                pregunta1: {
                    id: 1,
                    pregunta: 'How many team members can I invite?',
                    respuesta: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
                },
                pregunta2: {
                    id: 2,
                    pregunta: 'What is the maximum file upload size?',
                    respuesta: 'No more than 2GB. All files in your account must fit your allotted storage space.'
                },
                pregunta3: {
                    id: 3,
                    pregunta: 'How do I reset my password?',
                    respuesta: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
                },
                pregunta4: {
                    id: 4,
                    pregunta: 'Can I cancel my subscription?',
                    respuesta: 'Yes! Send us a message and we’ll process your request no questions asked.'
                },
                pregunta5: {
                    id: 5,
                    pregunta: 'Do you provide additional support?',
                    respuesta: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
                }
            },
            img1: ''
        }
    }
})

index.component ('anws', {
    props: ['id', 'pregunta', 'respuesta'],
    data() {
        return {
            pase: false,
            visible: '',
            b: ''
        }
    },
    methods: {
        actualizarClase() {
            this.pase = !this.pase;
            if(this.pase){
                this.visible="ansW";
                this.b="b";
                this.img1="img1"
            } else {
                this.visible="";
                this.b="";
                this.img1=""
            }
        }
    },
    template: `
    <div class="quiz">
        <div>
            <p :class="b">
                {{pregunta}}
            </p>
            <label @click="actualizarClase">
                <img src="images/icon-arrow-down.svg" alt="icon" :class="img1">
            </label>
        </div>
        <div class="answ" :class="visible">
            <p>
                {{respuesta}}
            </p>
        </div>

        <div class="line"></div>
    </div>
    `
})

index.mount('#app')