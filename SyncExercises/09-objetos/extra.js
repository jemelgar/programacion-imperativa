//-------------------CALCULAR NOTAS-------------------
const alumno = {
    nombre: "Juan",
    legajo: 1111,
    notas: [
        { id: 0, nota: 7, materia: "NodeJS" },
        { id: 1, nota: 5, materia: "Programación Imperativa" },
        { id: 2, nota: 8, materia: "Inglés" },
        ],
        promedio() {
            return this.notas.reduce((acc, nota) => acc + nota.nota, 0) / this.notas.length
        },
        aprobo() {
            return this.promedio() >= 7
        },
        imprimirInformacion() {
            console.log(`El alumno: ${this.nombre} \nObtuvo un  promedio de: ${this.promedio()}\nSu status es: ${this.aprobo() ? 'Aprobado' : 'No Aprobado'}`)
        }
}
alumno.imprimirInformacion()