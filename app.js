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
        todos: [
            { id: 1, message: "wash car", active: true },
            { id: 2, message: "canyon drive", active: false },
        ],
    },
});
