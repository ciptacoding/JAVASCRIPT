//Latihan if else
let language = "french"; //deklarasi variabel language 
let greeting = "Selamat Pagi"; //deklarasi variabel greeting

if(language === "english")// jika language = "english"
{
    greeting = "Good Morning";// maka greeting berubah menjadi = "Good Morning"
}  
else if(language === "french")// lain jika language = "french"
{
    greeting = "Bonjour";// maka greeting berubah menjadi "Bonjour"
}
else if(language === "japan")// lain jika language = "japan"
{
    greeting = "Ohayogozaimasu";//maka greeting berubah menjadi "Ohayogozaimasu"
}
console.log(greeting);//menampilkan nilai dari greeting