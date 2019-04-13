
export const uploadFile = async (file) => {
  let res = await fetch('https://wallery-api.herokuapp.com/images', {
    method: 'post',
    body: file
  });
  return res.status;
}

export const getImages = async () => {
  let res = await fetch('https://wallery-api.herokuapp.com/images', {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
  });
  return await res.json();
}