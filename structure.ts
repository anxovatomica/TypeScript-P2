//tsc ./structure.ts
let alumnes = new Array(5);
alumnes[2] = "Pedro";

console.dir(alumnes);
let profes2={'46757888589T':'Dr Bacterio'};
let profes = ["Octopus", "Oak"];
profes['123456789K'] = "DR. Oz ";
profes['699669696P'] = "Dra. Dolittle 3";
profes['d548365592F'] = "Vidii";
profes[0] = "Drafonite";
profes[8] = "ApagalaLus";
console.dir(profes);

console.log("ALUMNES:");
for (let index = 0; index < alumnes.length; index++) {
    console.log(alumnes[index]);
}
for(let k in alumnes){
    console.log(alumnes[k]);
}
console.log("Prfe con el dni 123456789K: " + profes['123456789K']);
for (let key in profes) {
    console.log("Key: " + key + " profe:" + profes[key]);
}

console.log("ARRAY MULTIDIMENSIONAL");
let alumnesA21 = ["ya", "yu", "yi"];
let alumnes22 = ["Ma", "mo", "mu"];
let aulas = [];
aulas[21] = alumnesA21;
aulas[1] = alumnes22;
console.log(aulas[21][1]);
console.log(aulas[22][2]);

for (let numAula in aulas) {
    let aula = aulas[numAula];
    for (let posAlumno in aula) {
        let alumno = aula[posAlumno];
        console.log("aula: " + numAula + " pos: " + posAlumno + " nombre: " + alumno);
    }
}
for (let numAula in aulas) {
    for (let posAlumno in aulas[numAula]) {
        console.log("aula: " + numAula + " pos: " + posAlumno + " nombre: " + aulas[numAula][posAlumno]);
    }
}
let alumno1 = new Alumno("Pedro", "Gimmex", 0, ["M07", "M05"]);
function Alumno(nombre, apell = undefined, ed = 0, asignaturas = []) {
    this.nombre = nombre;
    this.apellido = apell;
    this.edad = ed;
    this.asignaturas = asignaturas;
    this.notas = [];
    this.muestraDatos = function () {
        console.log(this.nombre, this.apellido, this.edad);
    }
    this.setNota=function(valor, uf, modulo){
        this.notas.push()
    }
}
class Extra{
    precio;
    url;
    imagen;
    setValorExtra(precio, url){
        this.precio = precio;
        this.url = url;
    }
    constructor(precio = 0, url = ""){
        this.url = url;
        this.precio = precio;
    }
    getHTML(){
        let texto
    }
}
class Nota{
    valor;
    uf;
    modulo;
    setValorModuloUF(valor, modulo, uf){
        this.valor = valor;
        this.uf = uf;
        this.modulo = modulo;
    }
    constructor(valor = 0, uf = 0, modulo=""){
        this.valor = valor;
        this.uf = uf;
        this.modulo = modulo;
    }
    getNota(){
        let texto = "<span>"+this.valor+"</span>";
        return texto;
    }
}
let alumnosCompleto = {
    "Gin": new Alumno("Gin", "Soler", 20, ["M9", "M05"])
    , "Alan": new Alumno("Alan", "Gran", 89, ["M05", "M10"])
};
alumnosCompleto[alumno1.nombre] = alumno1;
console.log(alumnosCompleto["Alan"].apellido);
console.log(alumnosCompleto.Alan["apellido"]);
for(let nombreAlumno in alumnosCompleto){
    let alumno = alumnosCompleto[nombreAlumno];
}
