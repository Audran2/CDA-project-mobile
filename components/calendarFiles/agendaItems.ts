import isEmpty from "lodash/isEmpty";
import { MarkedDates } from "../../../src/types";

const today = new Date().toISOString().split("T")[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(12);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(numberOfDays: number) {
  const array = [];
  for (let index = 1; index <= numberOfDays; index++) {
    let d = Date.now();
    if (index > 8) {
      const newMonth = new Date(d).getMonth() + 1;
      d = new Date(d).setMonth(newMonth);
    }
    const date = new Date(d + 864e5 * index);
    const dateString = date.toISOString().split("T")[0];
    array.push(dateString);
  }
  return array;
}
function getPastDate(numberOfDays: number) {
  return new Date(Date.now() - 864e5 * numberOfDays)
    .toISOString()
    .split("T")[0];
}

export const agendaItems = [
  {
    title: dates[0],
    data: [
      {
        _id: "65ad1bc8a994d152deb26569",
        nom: "Assassin's Creed Odyssey",
        image: "https://sfractus-images.cleo.media/unsafe/0x49:2016x1183/2000x0/images/Assassins-Creed-Odyssey-2548.jpg",
        genre: "Action",
        dateSortie: new Date(Date.parse("2018-10-05T00:00:00.000+00:00")),
        note: 9,
        studio: {nom: "Ubisoft"},
        plateformes: ["pc", "playstation", "xbox"],
      },
    ],
  },
  {
    title: dates[1],
    data: [
      {
        _id: "65ad1bc8a994d152deb26569",
        nom: "Assassin's Creed Odyssey",
        image: "https://sfractus-images.cleo.media/unsafe/0x49:2016x1183/2000x0/images/Assassins-Creed-Odyssey-2548.jpg",
        genre: "Action",
        dateSortie: new Date(Date.parse("2018-10-05T00:00:00.000+00:00")),
        note: 9,
        studio: {nom: "Ubisoft"},
        plateformes: ["pc", "playstation", "xbox"],
      },
      {
        _id: "65ad1bc8a994d152deb26569",
        nom: "Assassin's Creed Odyssey",
        image: "https://sfractus-images.cleo.media/unsafe/0x49:2016x1183/2000x0/images/Assassins-Creed-Odyssey-2548.jpg",
        genre: "Action",
        dateSortie: new Date(Date.parse("2018-10-05T00:00:00.000+00:00")),
        note: 9,
        studio: {nom: "Ubisoft"},
        plateformes: ["pc", "playstation", "xbox"],
      },
    ],
  },
  {
    title: dates[2],
    data: [
      {
        _id: "65ad1bc8a994d152deb26569",
        nom: "Assassin's Creed Odyssey",
        image: "https://sfractus-images.cleo.media/unsafe/0x49:2016x1183/2000x0/images/Assassins-Creed-Odyssey-2548.jpg",
        genre: "Action",
        dateSortie: new Date(Date.parse("2018-10-05T00:00:00.000+00:00")),
        note: 9,
        studio: {nom: "Ubisoft"},
        plateformes: ["pc", "playstation", "xbox"],
      },
      {
        _id: "65ad1bc8a994d152deb26569",
        nom: "Assassin's Creed Odyssey",
        image: "https://sfractus-images.cleo.media/unsafe/0x49:2016x1183/2000x0/images/Assassins-Creed-Odyssey-2548.jpg",
        genre: "Action",
        dateSortie: new Date(Date.parse("2018-10-05T00:00:00.000+00:00")),
        note: 9,
        studio: {nom: "Ubisoft"},
        plateformes: ["pc", "playstation", "xbox"],
      },
      {
        _id: "65ad1bc8a994d152deb26569",
        nom: "Assassin's Creed Odyssey",
        image: "https://sfractus-images.cleo.media/unsafe/0x49:2016x1183/2000x0/images/Assassins-Creed-Odyssey-2548.jpg",
        genre: "Action",
        dateSortie: new Date(Date.parse("2018-10-05T00:00:00.000+00:00")),
        note: 9,
        studio: {nom: "Ubisoft"},
        plateformes: ["pc", "playstation", "xbox"],
      },
      {
        _id: "65ad1bc8a994d152deb26569",
        nom: "Assassin's Creed Odyssey",
        image: "https://sfractus-images.cleo.media/unsafe/0x49:2016x1183/2000x0/images/Assassins-Creed-Odyssey-2548.jpg",
        genre: "Action",
        dateSortie: new Date(Date.parse("2018-10-05T00:00:00.000+00:00")),
        note: 9,
        studio: {nom: "Ubisoft"},
        plateformes: ["pc", "playstation", "xbox"],
      },
    ],
  },
  {
    title: dates[3],
    data: [
      {
        _id: "65ad1bc8a994d152deb26569",
        nom: "Assassin's Creed Odyssey",
        image: "https://sfractus-images.cleo.media/unsafe/0x49:2016x1183/2000x0/images/Assassins-Creed-Odyssey-2548.jpg",
        genre: "Action",
        dateSortie: new Date(Date.parse("2018-10-05T00:00:00.000+00:00")),
        note: 9,
        studio: {nom: "Ubisoft"},
        plateformes: ["pc", "playstation", "xbox"],
      },
    ],
  },
];

export function getMarkedDates() {
  const marked: MarkedDates = {};

  agendaItems.forEach((item) => {
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      marked[item.title] = { marked: true };
    } else {
      marked[item.title] = { disabled: true };
    }
  });
  return marked;
}
