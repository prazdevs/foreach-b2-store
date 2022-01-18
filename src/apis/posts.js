export async function getPost(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (res.ok) {
      const post = await res.json();
      return post;
    } else {
      throw new Error("request echouée");
    }
  } catch (e) {
    throw new Error("fetch a échoué");
  }
}

export async function getAllPosts() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

    if (res.ok) {
      const posts = await res.json();
      return posts;
    } else {
      throw new Error("request echouée");
    }
  } catch (e) {
    throw new Error("fetch a échoué");
  }
}
