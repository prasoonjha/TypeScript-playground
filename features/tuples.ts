const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//create a Type alias
type Drink = [string, boolean, array];

//tuple
const pepsi: Drink = ["brown", true, 40];
