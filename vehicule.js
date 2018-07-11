var Vehicule = function(modele, km, premium) {
  var self = this;
  this.modele = modele;
  this.km = km;
  this.engine = "V6";
  this.color = "black";

  if (premium) {
    this.engine = "V12";
    this.color = "Platinium"
}

this.addTrip = function(newKm) {
  if (newKm > 0) {
    self.km += newKm;
  }
}

var twingo = new Vehicule("renault", 20, false)
console.log(twingo);

twingo.addTrip(2000)
console.log(twingo);

var astonMartin = new Vehicule("Aston Martin", 0, true)
console.log(astonMartin);
