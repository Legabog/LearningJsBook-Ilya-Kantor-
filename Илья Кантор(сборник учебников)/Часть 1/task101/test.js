
async function loadJson(url) {
  let a = await fetch(url);
  if (a.status == 200) {
    let json = await a.json()
    return json;
  } else {
    throw new Error(a.status);
  }
}

loadJson('no-such-user.json')
  .catch(alert);