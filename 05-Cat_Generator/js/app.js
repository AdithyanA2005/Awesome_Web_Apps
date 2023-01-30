function generate_cat() {
    var image = document.createElement('img')
    var div = document.getElementById("cat-generate")
    var plate = document.getElementsByTagName("h2")[0]
    image.src="data:image/jpeg;base64,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"
    plate.style.display= "none"
    div.appendChild(image)
}

function destroy_cat() {
    try {
        var image = document.getElementsByTagName('img')
        var div = document.getElementById("cat-generate")      
        div.removeChild(image[0])

    } catch (TypeError) {
        var plate = document.getElementsByTagName("h2")[0]
        plate.style.display= "block"        
    }
}

function massive_destroy() {
    try {
        var image = document.getElementsByTagName('img')
        var div = document.getElementById("cat-generate")      
        for (i=0; i < image.length + 10; i++){
            div.removeChild(image[i])
            console.log(i)
        } 

    } catch (TypeError) {
        var plate = document.getElementsByTagName("h2")[0]
        plate.style.display= "block"        
    }   
}
