const mealsList = [
  {
    url: "https://centrumrespo.pl/przepisy/jednogarnkowe-danie-z-kurczakiem-ryzem-i-warzywami/",
    title: "Jednogarnkowe danie z kurczakiem, ryżem i warzywami",
    image:
      "https://media.centrumrespo.pl/wp-content/uploads/2024/01/02085302/Jednogarnkowe-danie-z-kurczakiem-ryzem-i-warzywami.jpg",
  },
  {
    url: "https://centrumrespo.pl/przepisy/tradycyjna-potrawka-z-kurczaka/",
    title: "Tradycyjna potrawka z kurczaka",
    image:
      "https://media.centrumrespo.pl/wp-content/uploads/2023/11/15193857/Potrawka-z-kurczaka.jpg",
  },
  {
    url: "https://centrumrespo.pl/przepisy/makaron-z-sosem-smietanowym-ze-schabem-i-brukselka/",
    title: "Makaron z sosem śmietanowym ze schabem i brukselką",
    image:
      "https://media.centrumrespo.pl/wp-content/uploads/2023/10/26112048/PA240403s.jpg",
  },
  {
    url: "https://centrumrespo.pl/przepisy/kurczak-w-sosie-szpinakowym-z-makaronem/",
    title: "Kurczak w sosie szpinakowym z makaronem",
    image:
      "https://media.centrumrespo.pl/wp-content/uploads/2023/12/15113557/Kurczak-w-sosie-spzinkaowym-z-makaronem.jpg",
  },
  {
    url: "https://centrumrespo.pl/przepisy/pieczone-pulpeciki-drobiowe-w-kremowym-sosie-i-makaronem-orzo/",
    title: "Pieczone pulpeciki drobiowe w kremowym sosie i makaronem orzo",
    image:
      "https://media.centrumrespo.pl/wp-content/uploads/2024/01/03100133/Pieczone-pulpeciki-drobiowymi-w-kremowym-sosie-bazyliowym-z-makaronem-orzo.jpg",
  },
  {
    url: "https://centrumrespo.pl/przepisy/tradycyjna-potrawka-z-kurczaka/",
    title: "Tradycyjna potrawka z kurczaka",
    image:
      "https://media.centrumrespo.pl/wp-content/uploads/2023/11/15193857/Potrawka-z-kurczaka.jpg",
  },
  {
    url: "https://centrumrespo.pl/przepisy/makaron-z-sosem-smietanowym-ze-schabem-i-brukselka/",
    title: "Makaron z sosem śmietanowym ze schabem i brukselką",
    image:
      "https://media.centrumrespo.pl/wp-content/uploads/2023/10/26112048/PA240403s.jpg",
  },
  {
    url: "https://centrumrespo.pl/przepisy/kurczak-w-sosie-szpinakowym-z-makaronem/",
    title: "Kurczak w sosie szpinakowym z makaronem",
    image:
      "https://media.centrumrespo.pl/wp-content/uploads/2023/12/15113557/Kurczak-w-sosie-spzinkaowym-z-makaronem.jpg",
  },
  {
    url: "https://centrumrespo.pl/przepisy/pieczone-pulpeciki-drobiowe-w-kremowym-sosie-i-makaronem-orzo/",
    title: "Pieczone pulpeciki drobiowe w kremowym sosie i makaronem orzo",
    image:
      "https://media.centrumrespo.pl/wp-content/uploads/2024/01/03100133/Pieczone-pulpeciki-drobiowymi-w-kremowym-sosie-bazyliowym-z-makaronem-orzo.jpg",
  },
];

export const getMeals = (num) => {
  const shuffled = mealsList.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};
