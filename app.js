

const slider = new Vue ({
    el: "#slider",

    data:{
        paese : [
            {
                item : "img/01.jpg",
                title: "Svezia",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            
            },
        
            {
                item : "img/02.jpg",
                title: "Svizzera",
                text: "Lorem ipsum",
            },
        
            {
                item : "img/03.jpg",
                title:  "Gran Bretagna",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                
            },
        
            {
                item : "img/04.jpg",
                title: "Germania",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
                
            },
        
            {
                item : "img/05.jpg",
                title: "Paradise",
                text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
                
            },
        ],

        contatore : 0,

        clock : null,
    },

    methods:{

        // attiva : function(){
        //     for(let i =0; i<5; i++){
        //         if(this.active==true){
        //             return "active";
        //         }
        //     }
        // },

        // anteprime : function (){
        //     // for(let i=0; i<5; i++){
        //     //     this.active = false;
        //     // }
        //     // this.active = true; 
        //     // console.log(this.active);
        //     // if(this.active==true){
        //     //     return "active";
        //     // }
        //     console.log(this.paese, this.paese.item,this.active);
        // },

        down : function(){
            if(this.contatore < this.paese.length -1){
                this.contatore++;
            }else{
                this.contatore = 0;
            }
        },

        up : function(){
            console.log("decrementa");
            if(this.contatore>0){
                this.contatore--;
            }else{
                this.contatore = this.paese.length -1;
            }
        },

        
        stopAutoPlay : function(){
            clearInterval (this.clock);
        },

        startAutoPlay : function(){
            this.clock = setInterval(this.up, 3000);
        }

       
    },

    mounted(){
        this.startAutoPlay();
    }
})