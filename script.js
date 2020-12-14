'use strict';

async function getUsers(names) {
  let jobs = [];

  for (let name of names) {
    let job = (async () => {
      let response = await fetch(`https://api.github.com/users/${name}`);
      if (response.status != 200) return null;
      return await response.json();
    })();
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}

let x = getUsers(['iliakan', 'remy', 'no.such.users']);
x.then(r => console.log(r));
