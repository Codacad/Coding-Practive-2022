document.querySelector('.js-challange-btn').addEventListener('click', challenge)

function challenge() {
    const paragraph = document.getElementById('paragraph').textContent
    const correction = paragraph.toLowerCase()
    const firstLetter =  correction[0].toUpperCase()
   
    const capitalized = correction.replace(correction[0], firstLetter)

    document.getElementById('paragraph').textContent =  capitalized

}
 

 