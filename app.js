Vue.component("todo", {
    props: ["todo"],
    template: `
        <li class="todo-item">
            <p v-bind:class="{todoText: true, completedTodo: !todo.active}" v-on:click="$emit('toggle', todo.id)">
                {{ todo.message }}
            </p>
            <button v-on:click="$emit('delete-todo', todo.id)">Delete</button>
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
         * Resets value of newTodo
         * @param
         * @return
         */
        resetnewTodo: function () {
            this.newTodo = "";
        },

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
                this.resetnewTodo();
            }
        },

        /**
         * Deletes todo from todos array
         * @param Number id
         * @return
         */
        deleteTodo: function (id) {
            for (let i = 0; i < this.todos.length; i++) {
                var todo = this.todos[i];

                if (todo.id === parseInt(id)) {
                    this.todos = [
                        ...this.todos.slice(0, i),
                        ...this.todos.slice(i + 1, this.todos.length),
                    ];

                    break;
                }
            }
        },

        /**
         * Toggles active property for todo
         * @param id
         * @return
         */
        toggleActiveProperty: function (id) {
            for (let i = 0; i < this.todos.length; i++) {
                var todo = this.todos[i];

                if (todo.id === parseInt(id)) {
                    todo.active = !todo.active;
                    break;
                }
            }
        },
    },
});
