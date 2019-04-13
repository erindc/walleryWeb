
export const uploadFile = async (file) => {
  let res = await fetch('http://localhost:3000/images', {
    method: 'post',
    body: file
  });
  return res;
}