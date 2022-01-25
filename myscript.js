let app = new Vue ({
    el: '#miapp',
    data: {
        arrayEmail : [],

    },
    //prima che crei la pagina ciclo col for 10 volte la funzione per generare una mail
    mounted : function(){

        for(i=0; i<10; i++){
            this.generaEmail();
        }
        console.log(this.arrayEmail)
    },

    methods: {
        generaEmail: function(){ 
            //richiedo al server una mail e la inserisco nell'array vuoto che ho creato nei data;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((rispostaServer) => {

                let emailGenerata = rispostaServer.data.response
                this.arrayEmail.push(emailGenerata)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                
            });
        },
    },

});
