
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let user;
  while(true) {
    let name = prompt("Введите логи?", "iliaken");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch(error) {
      if (error instanceof HttpError && error.response.status == 200) {
        alert("Такого пользователя не существует повторите код");
      } else {
        throw error;
      }
    }
  }
  
  
  alert(`Полное имя: ${loadjsn.name}.`);
  return user;
}