import axios from 'axios'

const postsInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts/',
  headers: {
    Authorization: 'Bearer dsgdsoijofqzER34TG34G2ABGZ2G42G',
  },
})

postsInstance.interceptors.request.use((config) => {
  // Je peux intéragir sur la config et empecher la requete de partir
  // si je ne renvoie pas la config
  return config
},
(error) => {
  return Promise.reject(error)
})

/**
 * Gets a single post
 * @param {string} id id of the post
 * @returns {Object} fetched post
 */
export async function getPost(id) {
  try {
    const { data } = await postsInstance.get(`/${id}`)

    return data
  } catch (e) {
    if (e.response.status === 404) {
      throw new Error(`Le post ${id} n'existe pas`)
    }
    throw new Error('Une erreur est survenue')
  }
}

export async function getAllPosts() {
  try {
    const { data } = await postsInstance.get('/')

    return data
  } catch (e) {
    throw new Error('Une erreur est survenue')
  }
}

export async function createPost(post) {
  try {
    const { data } = await postsInstance.post('/', {
      title: post.title,
      body: post.body,
      userId: post.userId,
    })

    return data
  } catch (e) {
    throw new Error('Une erreur est survenue')
  }
}

export async function deletePost(id) {
  try {
    await postsInstance.delete(`/${id}`)
  } catch (e) {
    throw new Error('Une erreur est survenue')
  }
}
