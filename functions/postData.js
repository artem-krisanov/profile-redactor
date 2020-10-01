const PostData = (name, mail, phone) => {
  const payload = {
    name: name,
    mail: mail,
    phone: phone,
  };

  fetch('http://jsonplaceholder.typicode.com/posts ', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'x-token-access': 'random',
    },
    body: JSON.stringify(payload),
  });
};

export default PostData;
