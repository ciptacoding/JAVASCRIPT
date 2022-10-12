
//global variabel, dapat diakses pada parent() dan  child()
const a = 'a';


function parent(){
    //lokal variabel, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
    const b= 'b';

    function child(){
        //lokal variabel, dapat diakses hanya pada fungsi child()
        const c = 'c';
    }
}