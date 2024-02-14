// Custom implementation of Promise.all() function
async function promiseAll(urls) {
  const responses = [];
  const resolved_count = 0;
  return new Promise((resolve, reject) => {
    for (const index in urls) {
      fetch(urls[index])
        .then((response) => {
          responses[index] = response;
          resolved_count++;
          if (resolved_count === urls.length) {
            resolve(responses);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}
