export const prodEndpoint = 'https://wallery-api.herokuapp.com'
export const devEndpoint = 'http://localhost:3005'

const endpoint = process.env.NODE_ENV === 'production' ? prodEndpoint : devEndpoint;

export const uploadFile = async (file) => {
  let res = await fetch(endpoint + '/images', {
    method: 'post',
    body: file
  });
  return res.status;
}

export const getImages = async () => {
  let res = await fetch(endpoint + '/images', {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
  });
  return await res.json();
}

export const likeImage = async (id) => {
  let res = await fetch(endpoint + `/images/${id}`, {
    method: 'put',
    body: JSON.stringify({likes:true}),
    headers: {'Content-Type': 'application/json'}
  });
  return await res.status;
}

export const flagImage = async (id) => {
  let res = await fetch(endpoint + `/images/${id}`, {
    method: 'put',
    body: JSON.stringify({flags:true}),
    headers: {'Content-Type': 'application/json'}
  });
  return await res.status;
}

