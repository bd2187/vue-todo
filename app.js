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
        todo: {
            id: 0,
            message: "",
            active: true,
        },
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

        /**
         * Generates ID for todo.
         * Note: (This can potentially create duplicate IDs. Check if ID exists in arr)
         * @param String todo
         * @return Object
         */
        createNewTodo: function (todo) {
            var id = Math.floor(Math.random() * 10) * 123456789;
            var newTodo = { ...this.todo, id, message: todo };

            return newTodo;
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

            if (isTodoValid) {
                var newTodo = this.createNewTodo(this.newTodo);
                this.todos = [newTodo, ...this.todos];
            }
        },
    },
});
