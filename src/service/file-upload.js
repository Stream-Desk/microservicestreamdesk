import * as axios from "axios";

const baseUrl = "https://streamdeskticketmicroservice.herokuapp.com";

function upload(formData) {
  const url = `${baseUrl}/api/Files`;
  return (
    axios
      .post(url, formData)
      // get data
      .then((files) => files.data)      
      // add url field
      .then((files) =>
        files.map((img) =>
          Object.assign(img, { url: `${baseUrl}/api/Files${img.id}` })
        )     
      )
     
  );
}

export default { upload };
