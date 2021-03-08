function* gen() {
  var url = 'https://api.github.com/users/github'
  var result = yield fetch(url)
  console.log(result.bio)
}

const g = gen()
g.next()
  .value.then((result) => result.json())
  .then((data) => g.next(data))
