
export const uploadFile = async (file) => {
  let res = await fetch('https://wallery-api.herokuapp.com/images', {
    method: 'post',
    body: file
  });
  return {data: await res.json(), status: res.status};
}