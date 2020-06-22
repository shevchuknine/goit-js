import './styles.css';
import newsTemplate from "./templates/newsTemplate.hbs";
import newsTemplate1 from "./templates/newsTemplate1.hbs";
import newsTemplate2 from "./templates/newsTemplate2.hbs";

const news = [
  {
    id: "url-1",
    title: "News 1",
    description: "News description 1",
    date: "22.06.2020"
  },
  {
    id: "url-2",
    title: "News 2",
    description: "News description 2",
    date: "21.06.2020"
  },
  {
    id: "url-3",
    title: "News 3",
    description: "News description 3",
    date: "20.06.2020"
  },
  {
    id: "url-4",
    title: "News 4",
    description: "News description 4",
    date: "22.06.2020"
  }
];

document.querySelector("body").insertAdjacentHTML("afterbegin",
  // newsTemplate(news)
  newsTemplate({news})
);
