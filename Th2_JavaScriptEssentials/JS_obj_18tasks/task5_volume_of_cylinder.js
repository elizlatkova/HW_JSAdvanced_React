//Volume of a cylinder : V = πr^2h
const cylinder = {
    radius: 5,
    height: 2,
    calculateVolume(){
        return (Math.PI*cylinder.radius**2*cylinder.height).toFixed(4)
    }
}
let volume = cylinder.calculateVolume()
console.log(volume);

//____________________________or__________________________

function Cylinder(radius, height) {
    this.radius = radius;
    this.height = height;
}
Cylinder.prototype.Volume = function () {
    return (Math.PI*this.radius**2*this.height).toFixed(4)
}
let myCylinder = new Cylinder(5,2)
console.log(myCylinder.Volume());