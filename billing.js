$(document).ready(function(){
  //Variables
var selectedSavoury = {
  dish: "(None)",
  price: 0
};
var selectedDesserts = {
  dish: "(None)",
  price: 0
};

var selectedBrownies = {
  dish: "(None)",
  price: 0
};
var selectedCookies = {
  dish: "(None)",
  price: 0
};
var selectedCakes= {
  dish: "(None)",
  price: 0
};
var Savoury = {
  firstDish: "Lasagna",
  firstDishPrice: 550,
  secondDish: "Alfredo pasta",
  secondDishPrice: 450,
  thirdDish: "BBQ biryani",
  thirdDishPrice: 300,
  fourthDish: "Chicken Shashlik",
  fourthDishPrice: 350,
  fifthDish: "Chicken Bbq Rice",
  fifthDishPrice: 400,
  sixthDish: "Singaporean Rice",
  sixthDishPrice: 350,
  seventhDish: "Dynamite chicken",
  seventhDishPrice: 250
};

var Dessert = {
  firstDish: "Blueberry Cheesecake",
  firstDishPrice: 200,
  secondDish: "Nutella Profiteroles",
  secondDishPrice: 400,
  thirdDish: "Chocolate Eclairs",
  thirdDishPrice: 300,
  fourthDish: "Gulab Jamuns",
  fourthDishPrice: 300
};

var Brownie = {
  firstDish: "Fudgy Brownies",
  firstDishPrice: 400,
  secondDish: "Nutella Brownies",
  secondDishPrice: 450,
  thirdDish: "Chocolate Glazed Brownies",
  thirdDishPrice: 400,
  fourthDish: "Oreo Brownies",
  fourthDishPrice: 450
};
var Cookie = {
  firstDish: "Chocolate Chip Cookies",
  firstDishPrice: 500,
  secondDish: "Nutella Cookies",
  secondDishPrice: 550,
  thirdDish: "M&M's cookies",
  thirdDishPrice: 550,
  fourthDish: "Shortbread cookies",
  fourthDishPrice: 300
};
var Cake = {
  firstDish: "Coffee Cake",
  firstDishPrice: 800,
  secondDish: "Coconut Cake",
  secondDishPrice: 1000,
  thirdDish: "Lemon Buttercream Cake",
  thirdDishPrice: 800,
  fourthDish: "Victoria Sandwich Cake",
  fourthDishPrice: 800,
  fifthDish: "Vanilla Pound Cake",
  fifthDishPrice: 500,
  sixthDish: "Lemon loaf Cake",
  sixthDishPrice: 600
};

function total() {
  return selectedSavoury.price + selectedDesserts.price + selectedBrownies.price + selectedCookies.price + selectedCakes.price;
}

function selectedSavouryFnc(dish, price) {
  selectedSavoury.price = price;
  selectedSavoury.dish = dish;
  $("#total").html(total());
  return dish + "(" + price + ")";
}

function selectedDessertsFnc(dish, price) {
  selectedDesserts.price = price;
  selectedDesserts.dish = dish;
  $("#total").html(total());
  return dish + "(" + price + ")";
}

function selectedBrowniesFnc(dish, price) {
  selectedBrownies.price = price;
  selectedBrownies.dish = dish;
  $("#total").html(total());
  return dish + "(" + price + ")";
}
function selectedCookiesFnc(dish, price) {
  selectedCookies.price = price;
  selectedCookies.dish = dish;
  $("#total").html(total());
  return dish + "(" + price + ")";
}
function selectedCakesFnc(dish, price) {
  selectedCakes.price = price;
  selectedCakes.dish = dish;
  $("#total").html(total());
  return dish + "(" + price + ")";
}

// Instantiating HTML Button Elements
// Savoury Elements
document.getElementById("btSavoury1").value =
  Savoury.firstDish + ": " + Savoury.firstDishPrice;

document.getElementById("btSavoury2").value =
  Savoury.secondDish + ": " + Savoury.secondDishPrice;

document.getElementById("btSavoury3").value =
  Savoury.thirdDish + ": " + Savoury.thirdDishPrice;

  document.getElementById("btSavoury4").value =
  Savoury.fourthDish + ": " + Savoury.fourthDishPrice;

  document.getElementById("btSavoury5").value =
  Savoury.fifthDish + ": " + Savoury.fifthDishPrice;

  document.getElementById("btSavoury6").value =
  Savoury.sixthdDish + ": " + Savoury.sixthDishPrice;

  document.getElementById("btSavoury7").value =
  Savoury.seventhDish + ": " + Savoury.seventhDishPrice;

// Desserts Elements
document.getElementById("btDessert1").value =
  Dessert.firstDish + ": " + Dessert.firstDishPrice;

document.getElementById("btDessert2").value =
  Dessert.secondDish + ": " + Dessert.secondDishPrice;

document.getElementById("btDessert3").value =
  Dessert.thirdDish + ": " + Dessert.thirdDishPrice;

document.getElementById("btDessert4").value =
  Dessert.fourthDish + ": " + Dessert.fourthDishPrice;


// Brownies Elements
document.getElementById("btBrownie1").value =
  Brownie.firstDish + ": " + Brownie.firstDishPrice;

document.getElementById("btBrownie2").value =
  Brownie.secondDish + ": " + Brownie.secondDishPrice;

document.getElementById("btBrownie3").value =
  Brownie.thirdDish + ": " + Brownie.thirdDishPrice;

  document.getElementById("btBrownie4").value =
  Brownie.fourthDish + ": " + Brownie.fourthDishPrice;

  // Cookies Elements
document.getElementById("btCookie1").value =
  Cookie.firstDish + ": " + Cookie.firstDishPrice;

document.getElementById("btCookie2").value =
  Cookie.secondDish + ": " + Cookie.secondDishPrice;

document.getElementById("btCookie3").value =
  Cookie.thirdDish + ": " + Cookie.thirdDishPrice;

document.getElementById("btCookie4").value =
  Cookie.fourthDish + ": " + Cookie.fourthDishPrice;

  // Cakes Elements
document.getElementById("btCake1").value =
  Cake.firstDish + ": " + Cake.firstDishPrice;

document.getElementById("btCake2").value =
  Cake.secondDish + ": " + Cake.secondDishPrice;

document.getElementById("btCake3").value =
  Cake.thirdDish + ": " + Cake.thirdDishPrice;

  document.getElementById("btCake4").value =
  Cake.fourthDish + ": " + Cake.fourthDishPrice;

  document.getElementById("btCake5").value =
  Cake.fifthDish + ": " + Cake.fifthDishPrice;

  document.getElementById("btCake6").value =
  Cake.sixthdDish + ": " + Cake.sixthDishPrice;


//  Bill: Elements
document.getElementById("selectedSavoury").innerHTML =
  selectedSavoury.dish + " (" + selectedSavoury.price + ")";

document.getElementById("selectedDesserts").innerHTML =
  selectedDesserts.dish + " (" + selectedDesserts.price + ")";

document.getElementById("selectedBrownies").innerHTML =
  selectedBrownies.dish + " (" + selectedBrownies.price + ")";

  document.getElementById("selectedCookies").innerHTML =
  selectedCookies.dish + " (" + selectedCookies.price + ")";

  document.getElementById("selectedCakes").innerHTML =
  selectedCakes.dish + " (" + selectedCakes.price + ")";


// Main menu onClicks handler
$("#btMenu").click(function() {
  $("#liMainMenu").toggle("slow");
});

$("#btSavoury").click(function() {
  $("#liSavoury").toggle("slow", function() {
    if ($(this).css("display") == "none") {
      $("#btSavoury").css("background-color", "black");
    } else {
      $("#btSavoury").css("background-color", "blue");
    }
  });
});

$("#btDesserts").click(function() {
  $("#liDesserts").toggle("slow", function() {
    if ($(this).css("display") == "none") {
      $("#btDesserts").css("background-color", "black");
    } else {
      $("#btDesserts").css("background-color", "blue");
    }
  });
});

$("#btBrownies").click(function() {
  $("#liBrownies").toggle("slow", function() {
    if ($(this).css("display") == "none") {
      $("#btBrownies").css("background-color", "black");
    } else {
      $("#btBrownies").css("background-color", "blue");
    }
  });
});

$("#btCookies").click(function() {
  $("#liCookies").toggle("slow", function() {
    if ($(this).css("display") == "none") {
      $("#btCookies").css("background-color", "black");
    } else {
      $("#btCookies").css("background-color", "blue");
    }
  });
});

$("#btCakes").click(function() {
  $("#liCakes").toggle("slow", function() {
    if ($(this).css("display") == "none") {
      $("#btCakes").css("background-color", "black");
    } else {
      $("#btCakes").css("background-color", "blue");
    }
  });
});

// Savoury onClicks
$("#btSavoury1").click(function() {
  $("#liSavoury").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedSavoury").html(selectedSavouryFnc(Savoury.firstDish, Savoury.firstDishPrice));
});

$("#btSavoury2").click(function() {
  $("#liSavoury").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedSavoury").html(selectedSavouryFnc(Savoury.secondDish,Savoury.secondDishPrice));
});

$("#btSavoury3").click(function() {
  $("#liSavoury").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedSavoury").html(selectedSavouryFnc(Savoury.thirdDish, Savoury.thirdDishPrice));
});

$("#btSavoury4").click(function() {
  $("#liSavoury").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedSavoury").html(selectedSavouryFnc(Savoury.fourthDish, Savoury.fourthDishPrice));
});

$("#btSavoury5").click(function() {
  $("#liSavoury").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedSavoury").html(selectedSavouryFnc(Savoury.fifthDish, Savoury.fifthDishPrice));
});

$("#btSavoury6").click(function() {
  $("#liSavoury").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedSavoury").html(selectedSavouryFnc(Savoury.sixthDish, Savoury.sixthDishPrice));
});

$("#btSavoury7").click(function() {
  $("#liSavoury").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedSavoury").html(selectedSavouryFnc(Savoury.seventhDish, Savoury.seventhDishPrice));
});

// Desserts onClicks
$("#btDessert1").click(function() {
  $("#liDesserts").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedDesserts").html(selectedDessertsFnc(Dessert.firstDish, Dessert.firstDishPrice));
});

$("#btDessert2").click(function() {
  $("#liDesserts").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedDesserts").html(selectedDessertsFnc(Dessert.secondDish, Dessert.secondDishPrice));
});

$("#btDessert3").click(function() {
  $("#liDesserts").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedDesserts").html(selectedDessertsFnc(Dessert.thirdDish, Dessert.thirdDishPrice));
});

 $("#btDessert4").click(function() {
  $("#liDesserts").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedDesserts").html(selectedDessertsFnc(Dessert.fourthDish, Dessert.fourthDishPrice));
});

// Brownies onClicks
$("#btBrownie1").click(function() {
  $("#liBrownies").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedBrownies").html(selectedBrowniesFnc(Brownie.firstDish, Brownie.firstDishPrice));
});

$("#btBrownie2").click(function() {
  $("#liBrownies").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedBrownies").html(selectedBrowniesFnc(Brownie.secondDish, Brownie.secondDishPrice));
});

$("#btBrownie3").click(function() {
  $("#liBrownies").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedBrownies").html(selectedBrowniesFnc(Brownie.thirdDish, Brownie.thirdDishPrice));
});

$("#btBrownie4").click(function() {
  $("#liBrownies").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedBrownies").html(selectedBrowniesFnc(Brownie.fourthDish, Brownie.fourthDishPrice));
});

// Cookies onClicks
$("#btCookie1").click(function() {
  $("#liCookies").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedCookies").html(selectedCookiesFnc(Cookie.firstDish, Cookie.firstDishPrice));
});

$("#btCookie2").click(function() {
  $("#liCookies").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedCookies").html(selectedCookiesFnc(Cookie.secondDish, Cookie.secondDishPrice));
});

$("#btCookie3").click(function() {
  $("#liCookies").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedCookies").html(selectedCookiesFnc(Cookie.thirdDish, Cookie.thirdDishPrice));
});

$("#btCookie4").click(function() {
  $("#liCookies").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedCookies").html(selectedCookiesFnc(Cookie.fourthDish, Cookie.fourthDishPrice));
});

// Cakes onClicks
$("#btCake1").click(function() {
  $("#liCakes").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedCakes").html(selectedCakesFnc(Cake.firstDish, Cake.firstDishPrice));
});

$("#btCake2").click(function() {
  $("#liCakes").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedCakes").html(selectedCakesFnc(Cake.secondDish,Cake.secondDishPrice));
});

$("#btCake3").click(function() {
  $("#liCakes").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedCakes").html(selectedCakesFnc(Cake.thirdDish, Cake.thirdDishPrice));
});

$("#btCake4").click(function() {
  $("#liCakes").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedCakes").html(selectedCakesFnc(Cake.fourthDish, Cake.fourthDishPrice));
});

$("#btCake5").click(function() {
  $("#liCakes").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedCakes").html(selectedCakesFnc(Cake.fifthDish, Cake.fifthDishPrice));
});

$("#btCake6").click(function() {
  $("#liCakes").children("li").children("input").css("background-color", "red");
  $(this).css("background-color", "green");
  $("#selectedCakes").html(selectedCakesFnc(Cake.sixthDish, Cake.sixthDishPrice));
});
});