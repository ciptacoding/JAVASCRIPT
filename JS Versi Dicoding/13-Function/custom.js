//custom function complex

function Greeting(language, name){
    if(language=="english"){
        console.log("Good Morning " + name + " !");
    }else if(language=="french"){
        console.log("Bonjour "+ name + " !");
    }else if(language=="deutsch"){
        console.log("Gutten Morgen " + name + " !");
    }else{
        console.log("Selamat Pagi " + name + " !");
    }
}

Greeting("french", "Cipta"); //memanggil function
