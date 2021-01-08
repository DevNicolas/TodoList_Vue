const app = new Vue({
  el: "#app",
  data: {
    titulo: "TODO List With Vue",
    tareas: [],
    nuevaTarea: "",
  },
  methods: {
    agregarTarea() {
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false,
      });
      this.nuevaTarea = "";
    },
    completarTarea(index) {
      this.tareas[index].estado = true;
    },
  },
});
