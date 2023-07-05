var flipCard = true

$("#card-number-input").on("input", function(){
    let typedValue = $(this).val();
    let maskedValue = typedValue.padEnd(16, 'x').substr(0, 16);
    
    // Insert space every four characters
    let spacedValue = maskedValue.replace(/(.{4})/g, "$1 ");

    if(typedValue.split("")[0] == null){
        $(".card-type").text("Credit Card")
        $("#amex").removeClass("grayscale")
        $("#visa").removeClass("grayscale")
        $("#masterCard").removeClass("grayscale")
        $("#discover").removeClass("grayscale")
    }

    if(typedValue.split("")[0] == 3){
        $(".card-type").text("American Express")

        $("#visa").addClass("grayscale")
        $("#masterCard").addClass("grayscale")
        $("#discover").addClass("grayscale")
    }

    if(typedValue.split("")[0] == 4){
        $(".card-type").text("Visa Card")

        $("#amex").addClass("grayscale")
        $("#masterCard").addClass("grayscale")
        $("#discover").addClass("grayscale")
    }

    if(typedValue.split("")[0] == 5){
        $(".card-type").text("MasterCard")

        $("#visa").addClass("grayscale")
        $("#amex").addClass("grayscale")
        $("#discover").addClass("grayscale")
    }

    if(typedValue.split("")[0] == 6){
        $(".card-type").text("Discover")

        $("#visa").addClass("grayscale")
        $("#masterCard").addClass("grayscale")
        $("#amex").addClass("grayscale")
    }

    if(flipCard == false){
        $(".card").toggleClass("flipped");
        flipCard = true
    }

    $(".card-numb").text(spacedValue)
})

$("#card-first-name-input").on("input", function(){
    let typedFirst = $(this).val()

    if(flipCard == false){
        $(".card").toggleClass("flipped");
        flipCard = true
    }

    $(".first-name").text(typedFirst)
})

$("#card-last-name-input").on("input", function(){
    let typedLast = $(this).val()

    if(flipCard == false){
        $(".card").toggleClass("flipped");
        flipCard = true
    }

    $(".last-name").text(typedLast)
})

 $("#card-expiration-input").on("input", function() {
    let typedExpire = $(this).val();
    let numericExpire = typedExpire.replace(/\D/g, ''); // Remove non-numeric characters

    if (typedExpire !== numericExpire) {
      $(this).val(numericExpire); // Update the input value without non-numeric characters
    }

    let maskedExpire = numericExpire.padEnd(4, '0').substr(0, 4);
    let spacedExpire = maskedExpire.replace(/(.{2})(?!$)/g, "$1 / ");

    if (!flipCard) {
      $(".card").toggleClass("flipped");
      flipCard = true;
    }

    $(".exp-date").text(spacedExpire);
  });

$("#card-cvc-input").on("input", function(){
    let typedCVC = $(this).val()

    if(flipCard){
        $(".card").toggleClass("flipped");
        flipCard = false
    }

    $(".cvc").text(typedCVC)
})



// let spacedFirst = typedFirst.replace(/(.{4})/g, "$1 / ")
