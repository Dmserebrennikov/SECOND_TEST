'use strict';

async function getUsers(names) {
  let logins = [];

  for (let user of names) {
    let login = fetch(`https://api.github.com/users/${user}`).then(
      sucess => {
        if (sucess.status == 200) {
          return sucess.json();
        } else {
          return 'null';
        }
      },
      error => {
        return 'null';
      },
    );
    logins.push(login);
  }

  let res = await Promise.all(logins);

  return res;
}

console.log(getUsers(['iliakan', 'remy', 'no.such.users']));
