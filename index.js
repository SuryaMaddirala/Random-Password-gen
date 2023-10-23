let box1 = document.querySelector(".box-1");
let box2 = document.querySelector(".box-2");
let box3 = document.querySelector(".box-3");
let box4 = document.querySelector(".box-4");
let box5 = document.querySelector(".box-5");
let box6 = document.querySelector(".box-6");
let password_generator = document.querySelector(".password_generator");

function passwordGenerator() {
    let password1 = "";
    let password2 = "";
    let password3 = "";
    let password4 = "";
    let password5 = "";
    let password6 = "";
    let selector = [];
    let index = 0;

    let uppercase_alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let lowercase_alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let digits = [1,2,3,4,5,6,7,8,9];

    let special_characters = ['!','@','#','$','%','^','&','*','(',')','_','+','/','*','-','+'];

    for(i=0;i<10;i++){
        let randomuAlphabets = Math.floor(Math.random()*uppercase_alphabets.length);
        // uppercase_alphabets = uppercase_alphabets[randomuAlphabets];
        // console.log(uppercase_alphabets)

        let randomlAlphabets = Math.floor(Math.random()*lowercase_alphabets.length);
        // lowercase_alphabets = lowercase_alphabets[randomlAlphabets]
        // console.log(lowercase_alphabets)

        let randomDigits = Math.floor(Math.random()*digits.length);

        let randomChar = Math.floor(Math.random()*special_characters.length);

        let picker = Math.floor(Math.random()*400)
        if(picker<100){
            selector = uppercase_alphabets;
            index = randomuAlphabets;
        }
        else if(picker<200){
            selector = lowercase_alphabets;
            index = randomlAlphabets;
        }else if(picker <300){
            selector = digits;
            index = randomDigits;
        }else{
            selector = special_characters;
            index = randomChar;
        }

        password1 +=  selector[index];
    }

    for(i=0;i<10;i++){
        let randomuAlphabets = Math.floor(Math.random()*uppercase_alphabets.length);
        // uppercase_alphabets = uppercase_alphabets[randomuAlphabets];
        // console.log(uppercase_alphabets)

        let randomlAlphabets = Math.floor(Math.random()*lowercase_alphabets.length);
        // lowercase_alphabets = lowercase_alphabets[randomlAlphabets]
        // console.log(lowercase_alphabets)

        let randomDigits = Math.floor(Math.random()*digits.length);

        let randomChar = Math.floor(Math.random()*special_characters.length);

        let picker = Math.floor(Math.random()*400)
        if(picker<100){
            selector = uppercase_alphabets;
            index = randomuAlphabets;
        }
        else if(picker<200){
            selector = lowercase_alphabets;
            index = randomlAlphabets;
        }else if(picker <300){
            selector = digits;
            index = randomDigits;
        }else{
            selector = special_characters;
            index = randomChar;
        }

        password2 +=  selector[index];
    }
    for(i=0;i<10;i++){
        let randomuAlphabets = Math.floor(Math.random()*uppercase_alphabets.length);
        // uppercase_alphabets = uppercase_alphabets[randomuAlphabets];
        // console.log(uppercase_alphabets)

        let randomlAlphabets = Math.floor(Math.random()*lowercase_alphabets.length);
        // lowercase_alphabets = lowercase_alphabets[randomlAlphabets]
        // console.log(lowercase_alphabets)

        let randomDigits = Math.floor(Math.random()*digits.length);

        let randomChar = Math.floor(Math.random()*special_characters.length);

        let picker = Math.floor(Math.random()*400)
        if(picker<100){
            selector = uppercase_alphabets;
            index = randomuAlphabets;
        }
        else if(picker<200){
            selector = lowercase_alphabets;
            index = randomlAlphabets;
        }else if(picker <300){
            selector = digits;
            index = randomDigits;
        }else{
            selector = special_characters;
            index = randomChar;
        }

        password3 +=  selector[index];
    }
    for(i=0;i<10;i++){
        let randomuAlphabets = Math.floor(Math.random()*uppercase_alphabets.length);
        // uppercase_alphabets = uppercase_alphabets[randomuAlphabets];
        // console.log(uppercase_alphabets)

        let randomlAlphabets = Math.floor(Math.random()*lowercase_alphabets.length);
        // lowercase_alphabets = lowercase_alphabets[randomlAlphabets]
        // console.log(lowercase_alphabets)

        let randomDigits = Math.floor(Math.random()*digits.length);

        let randomChar = Math.floor(Math.random()*special_characters.length);

        let picker = Math.floor(Math.random()*400)
        if(picker<100){
            selector = uppercase_alphabets;
            index = randomuAlphabets;
        }
        else if(picker<200){
            selector = lowercase_alphabets;
            index = randomlAlphabets;
        }else if(picker <300){
            selector = digits;
            index = randomDigits;
        }else{
            selector = special_characters;
            index = randomChar;
        }

        password4 +=  selector[index];
    }
    for(i=0;i<10;i++){
        let randomuAlphabets = Math.floor(Math.random()*uppercase_alphabets.length);
        // uppercase_alphabets = uppercase_alphabets[randomuAlphabets];
        // console.log(uppercase_alphabets)

        let randomlAlphabets = Math.floor(Math.random()*lowercase_alphabets.length);
        // lowercase_alphabets = lowercase_alphabets[randomlAlphabets]
        // console.log(lowercase_alphabets)

        let randomDigits = Math.floor(Math.random()*digits.length);

        let randomChar = Math.floor(Math.random()*special_characters.length);

        let picker = Math.floor(Math.random()*400)
        if(picker<100){
            selector = uppercase_alphabets;
            index = randomuAlphabets;
        }
        else if(picker<200){
            selector = lowercase_alphabets;
            index = randomlAlphabets;
        }else if(picker <300){
            selector = digits;
            index = randomDigits;
        }else{
            selector = special_characters;
            index = randomChar;
        }

        password5 +=  selector[index];
    }
    for(i=0;i<10;i++){
        let randomuAlphabets = Math.floor(Math.random()*uppercase_alphabets.length);
        // uppercase_alphabets = uppercase_alphabets[randomuAlphabets];
        // console.log(uppercase_alphabets)

        let randomlAlphabets = Math.floor(Math.random()*lowercase_alphabets.length);
        // lowercase_alphabets = lowercase_alphabets[randomlAlphabets]
        // console.log(lowercase_alphabets)

        let randomDigits = Math.floor(Math.random()*digits.length);

        let randomChar = Math.floor(Math.random()*special_characters.length);

        let picker = Math.floor(Math.random()*400)
        if(picker<100){
            selector = uppercase_alphabets;
            index = randomuAlphabets;
        }
        else if(picker<200){
            selector = lowercase_alphabets;
            index = randomlAlphabets;
        }else if(picker <300){
            selector = digits;
            index = randomDigits;
        }else{
            selector = special_characters;
            index = randomChar;
        }

        password6 +=  selector[index];
    }

    box1.innerHTML = password1;
    box2.innerHTML = password2;
    box3.textContent = password3;
    box4.textContent = password4;
    box5.innerHTML = password5;
    box6.innerHTML = password6;

    
}



