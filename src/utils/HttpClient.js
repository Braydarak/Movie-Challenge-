const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFlNDZkMmUwYmUwNjhkYzg5NDYxYTI4NGY5MTMyZCIsInN1YiI6IjYyNjg5ODQwNGNjYzUwMDA5Y2I0NzZhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Mh0UV5z2IWan0k38Zc8-lSwGMb3Rot37zvG1juAo3g",
      "Content-Type" : "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}