const obj = {
    name: "Adrian",
    printName: function()
    {
        console.log(this.name);
    }
}

obj.color = "red";

// obj.printName();

console.log(Object.keys(obj));
console.log(Object.values(obj));