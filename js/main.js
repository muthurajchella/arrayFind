let iteams = [
    {id: 1, name: "Mobile1", cost: 2500},
    {id: 2, name: "Mobile2", cost: 3500},
    {id: 3, name: "Mobile3", cost: 4500},
    {id: 4, name: "Mobile4", cost: 5500},
    {id: 5, name: "Mobile5", cost: 6500},
];

let result = iteams.find((item, index) => {
    return item.cost <= 5500;
});
console.log(result);