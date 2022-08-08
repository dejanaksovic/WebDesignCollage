const {createApp}= Vue
createApp({
    data(){
        return{
            message:"Hello there!",
            isNavOpen: false,
        }
    }
}).mount('#app')

