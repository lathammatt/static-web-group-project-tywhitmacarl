var products = [
	{
		name: "Giraffe",
		description: "perfect for safaris",
		price: "$500",
		size: "large",
		URL: '<img src="img/giraffe.jpg">',
		soldout: '<img src="img/soldout.jpg">'
	},	{
		name: "Basketball",
		description: "for the sports fanatic",
		price: "$600",
		size: "small",
		URL: '<img src="img/basketball.jpg">',
		soldout: '<img src="img/soldout.jpg">'
	},	{
		name: "Batman",
		description: "for chasing catwoman",
		price: "$300",
		size: "medium",
		URL: '<img src="img/batman.jpg">',
		soldout: '<img src="img/soldout.jpg">'
	},	{
		name: "Christmas",
		description: "get into the howl-iday spirit",
		price: "$400",
		size: "large",
		URL: '<img src="img/christmas.jpeg">',
		soldout: '<img src="img/soldout.jpg">'
	},	{
		name: "Clouds",
		description: "for heavenly comfort",
		price: "$250",
		size: "small",
		URL: '<img src="img/clouds.jpg">',
		soldout: '<img src="img/soldout.jpg">'
	},	{
		name: "Dots",
		description: "for the party life",
		price: "$150",
		size: "small",
		URL: '<img src="img/dots.jpg">',
		soldout: '<img src="img/soldout.jpg">'
	},	{
		name: "Duck",
		description: "when you wish you had a different pet",
		price: "$300",
		size: "small",
		URL: '<img src="img/duck.jpg">',
		soldout: '<img src="img/soldout.jpg">'
	},	{
		name: "Stripes",
		description: "stylish and debonair",
		price: "$400",
		size: "medium",
		URL: '<img src="img/stripes.jpg">',
		soldout: '<img src="img/soldout.jpg">'
	},
]

var productInfo = document.getElementById("dogs")

for (var i = 0; i < products.length; i++) {
	var pName = products[i].name;
	var pDesc = products[i].description;
	var pPrice = products[i].price;
	var pSize = products[i].size;
	var pURL = products[i].URL;
	var pOut = products[i].soldout
	productInfo.innerHTML += "<div class='productContainer'>" + "<div class='dogpic'>" + pURL +"</div>" + "<div class='dogname'>" + pName +"</div>" + "<div class='dogdesc'>" + pDesc +"</div>" +"<div class='dogprice'>" + pPrice +"</div>" +"<div class='dogsize'>" + pSize + "</div>" + "<div class='soldout'>" + pOut + "</div>" + "</div>"
}


