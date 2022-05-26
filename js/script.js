// https://api.github.com/users/USERNAME.

const inpE = document.getElementById('inp')
const btnE = document.getElementById('btn')
const containerE = document.getElementById('name')
const errorE = document.getElementById('err')


class GitHub{
    #endpoint = "https://api.github.com/users/"
    getUser(login){
        return fetch(this.#endpoint + login).then((response) => {
        if (response.status === 200) {
            return response.json()
        }
        return Promise.reject(response.status)
        })

    }

}
const ERROR = {
    403: 'Server error',
    404: 'Not found',
    500: 'Server is unavailaible',
}


let user = null
const git = new GitHub()
btnE.addEventListener('click', onFined)

function onFined(){
git
    .getUser(inpE.value)
    .then((u) => {

    user = u
    console.log(u)
    renderData(user)
})
    .catch((e) => {
       renderError(e)
    })
}

function renderData(data){
    containerE.innerHTML = data.repos_url;
    containerE.innerHTML = data.public_repos;
    containerE.innerHTML = data.avatar_url;
}

function renderError(e){
    errorE.innerHTML = ERROR[e];
}
