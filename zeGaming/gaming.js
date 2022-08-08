
const app= Vue.createApp({
    data(){
        return {
            isGameOn: true,
            availCountries: [],
            currCountry: {},
            currPoints: new Number(),
            imgFlag: "https://flagcdn.com/w320/hk.png",
        }
    },
    async created(){
        const res= await fetch("https://restcountries.com/v2/all")
        const data= await res.json()
        this.availCountries= data
        console.log(data)
    },
    methods: {
        SelectRandom(){
            let index= Math.floor(Math.random()*1000)%250
            this.currCountry= this.availCountries[index]
            this.imgFlag= this.currCountry.flags.svg
        }
    }
})

app.mount('#app')

