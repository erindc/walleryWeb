import request from 'superagent';

export const getSignedRequest = async (file) => {
  console.log('here');
  const res = await request.get(`https://wallery-api.herokuapp.com/sign-s3?file-name=${file.name}&file-type=${file.type}`).send();
  console.log(res);
  const uploadRes = await uploadFile(file, res.signedRequest, res.url);
  return uploadRes;
}

const uploadFile = async (file, signedRequest, url) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        console.log('ok');
      }
      else{
        alert('Could not upload file.');
      }
    }
  };
  xhr.send(file);
}