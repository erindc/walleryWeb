import request from 'superagent';

export const getSignedRequest = async (file) => {
  console.log('here');
  const res = await request.get(`https://wallery-api.herokuapp.com/sign-s3?file-name=${file.name}&file-type=${file.type}`).send();
  console.log(res);
  const uploadRes = await uploadFile(file, res.signedRequest, res.url);
  return uploadRes;
}

const uploadFile = async (file, signedRequest, url) => {
  return await request.put(signedRequest).send(file);
}