

const notes = [' C ', 'C # ', ' Db ', ' D ', ' D# ', ' Eb ', ' E ', ' E# ', ' Fb ', ' F ', ' F# ', ' Gb ', ' G ', ' G# ', ' Ab ', ' A ', ' A# ', ' Bb ', ' B ', ' B# ', ' Cb '];

const results = document.getElementById('results')
const submit = document.getElementById('submit')

//event listener for the submit button 

submit.addEventListener('click', () => {
    //console.log("You've clicked me!");

    //inputting users input into variable n
    const n = document.getElementById('input').value;
    //converting strings to integers 
    const number = parseInt(n, 10);
    
    function random (arr, number) {
        let result = new Array(Math.abs(number)),
            len = arr.length,
            taken = new Array(len);
        if(number > len || number < 0)
            return ("number of notes must be exceed the total amount of named notes or no negative numbers");
        while(number--) {
            var x = Math.floor(Math.random()*len);
            result[number] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken? taken[len]: len;
        }
        return result;
    }
    
    results.innerHTML = random(notes, number);
});


