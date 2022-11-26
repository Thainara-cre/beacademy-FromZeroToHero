import fetch from 'node-fetch'

/* async / await */

const firstUser = async (userId) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/${userId}')
    let resultJson = await response.json()
    //let data = resultJson.title
    console.log(resultJson)
}

firstUser(1)


/* try/catch */
// https://jsonplaceholder.typicode.com/todos/1
async function user() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('error ---->', error)
        throw new Error('Erro no fetch')
    } finally {
        console.log('acabou')
    }
}

user()