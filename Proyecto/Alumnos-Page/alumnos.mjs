export class Alumno{
    constructor(nombre, apellidos, edad, materias=[], calificaciones={
        matemáticas:[],
        física:[],
        literatura:[],
        tecnología:[]
    },grupos=[]){
        this.nombre=nombre
        this.apellidos=apellidos
        this.edad=edad
        this.materias=materias
        this.calificaciones=calificaciones
        this.grupos=grupos
    }
    agregarMaterias(materia){
        this.materias.push(materia)
        this.console.log(`Se agregó ${materia}`)
    }
    agregarCalificaciones(calificacion){
        this.calificaciones.materia.push(calificacion)
    }
    agregarGrupos(grupo){
        this.grupos.push(grupo)
    }
}