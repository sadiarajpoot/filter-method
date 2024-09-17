//using filter method
//make array object
type ProductName = string;
type ProductPrice = number;

let SkinCare = [
  {
    ProductName: "FaceWash",
    ProductPrice: 999
  },
	{
		ProductName: "Hair Oil",
    ProductPrice: 900
  },
  {
    ProductName: "Face Fair Cream",
    ProductPrice: 700
  },
  {
    ProductName: "Soap",
    ProductPrice: 500
  },
  {
    ProductName: "Whitening serum",
    ProductPrice: 3000
  },
  {
    ProductName: "facial product",
    ProductPrice: 5000
  },
];
console.log(SkinCare);
let FilterSkinCare = SkinCare.filter((items) => items.ProductPrice < 1000);
console.log("THE PRODUCT LESS THEN 1000",FilterSkinCare);


