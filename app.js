Vue.component("todo", {
    props: ["todo"],
    template: `
        <li>
            <p v-bind:class="{completedTodo: !todo.active}">{{ todo.message }}</p>
            <button>Delete</button>
        </li>
    `,
});

var app = new Vue({
    el: "#app",
    data: {
        newTodo: "",
        todos: [
            { id: 1, message: "wash car", active: true },
            { id: 2, message: "canyon drive", active: false },
        ],

        /**
         * Checks if new todo is valid
         * @param String todo
         * @return Boolean
         */
        validateNewTodo: function (todo) {
            return todo.trim() !== "" ? true : false;
        },
    },

    methods: {
        /**
         * Adds todo to todos array if valid
         * @param Object evt
         * @return
         */
        addTodo: function (evt) {
            evt.preventDefault();
            var isTodoValid = this.validateNewTodo(this.newTodo);
            console.warn(isTodoValid);
        },
    },
});
