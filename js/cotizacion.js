Vue.createApp({
    data(){
        return{
            usd: ""
        }
    },
    created(){
        fetch("https://mercados.ambito.com/dolar/informal/variacion")
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            this.usd = "$" + data.compra + " - " + data.fecha;

        })
        .catch(err => console.log(err));
    }
}).mount("#app");