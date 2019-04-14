export const prodEndpoint = 'https://wallery-api.herokuapp.com'
const devEndpoint = 'http://localhost:3000/images'

export const uploadFile = async (file) => {
  let res = await fetch(prodEndpoint + '/images', {
    method: 'post',
    body: file
  });
  return res.status;
}

export const getImages = async () => {
  let res = await fetch(prodEndpoint + '/images', {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
  });
  return await res.json();
}

