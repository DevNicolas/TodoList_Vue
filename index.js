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
      localStorage.setItem("todo-list", JSON.stringify(this.tareas));
    },
    completarTarea(index) {
      this.tareas[index].estado = true;
      localStorage.setItem("todo-list", JSON.stringify(this.tareas));
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
      localStorage.setItem("todo-list", JSON.stringify(this.tareas));
    },
  },
  created: function () {
    let datosCache = JSON.parse(localStorage.getItem("todo-list"));
    if (!datosCache) {
      this.tareas = [];
    } else {
      this.tareas = datosCache;
    }
  },
});
