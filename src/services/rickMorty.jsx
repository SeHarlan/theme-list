export const fetchCharacters = (page) => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(({ info, results }) => {
   
      const alive = results
        .filter(result => result.status === 'Alive')
        .map(({ id, name, status, species, image }) => ({
          id,
          status,
          species,
          name,
          image
        }));
      const dead = results
        .filter(result => result.status !== 'Alive')
        .map(({ id, name, status, species, image }) => ({
          id,
          status,
          species,
          name,
          image
        }));
      return { alive, dead, totalPages: info.pages };
    });
};
