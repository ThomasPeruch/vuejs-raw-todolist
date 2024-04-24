var app = new Vue({
    el: '#app',
    data: {
        tasks: ['Exercicio Fisico','Estudo']
    },
    template:
    `
    <div>
            <li v-for="task in tasks">{{task}}</li>
        </ul>
    </div> 
    `
})
