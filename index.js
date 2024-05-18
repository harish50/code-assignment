const {fetchEvenTodos} = require("./src/fetchTodos");

function main(){
    fetchEvenTodos().then((todos)=>{
        console.table(todos)
    })
}

main()