
function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")


    document /* esta função está a bloquear o scroll da pagina aberta pela função anterior para que não se vejo restos da pagin anterior*/
        .querySelector("body")/* pode dar problema caso alguem acesse com uma tela pequena, pois não vai conseguir fazer scroll para baixo e ficara so com metade da tela */
        .classList
        .toggle("hideScroll")

    document
    .querySelector("#modal")
    .classList.toggle("addScroll")
}

function checkFields(event) {

   const valuesToCheck = [
       "title",
       "category",
       "image",
       "description",
       "link"
   ]

    const isEmpty = valuesToCheck.find(function(value) {

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })

    if(isEmpty) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos")
    }

   /*for( let value of valuesToCheck) {
        event.target[value].value
   }*/
}
