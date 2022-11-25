import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioLists/PortfolioList";
import "./style.scss";
import { Branding, Tumu, webPortfolio, Sosyal , Grafik, Logo } from "../../data";
import "../PortfolioLists/portfolioLists.scss";
import { useTranslation } from "react-i18next";

export default function Portfolio({ filter, setFilter, list, active}) {
  const [selected, setSelected] = useState("tumu");
  const [data, setData] = useState([]);

  function getSubCategory(category) {
    const subCategories = list.find((item) => item.id === category);
    return subCategories.sub;
  }

  useEffect(() => {
    switch (selected) {
      case "branding":
        setData(Branding);
        break;
      case "tumu":
        setData(Tumu);
        break;
      case "web":
        setData(webPortfolio);
        break;
        case "sosyal":
        setData(Sosyal);
        break;
        case "grafik":
        setData(Grafik);
        break;
        case "logo":
        setData(Logo);
        break;
      default:
        setData(Branding);
    }
  }, [selected]);
  const {t} = useTranslation();


  return (
    <div className="portfolio" id="portfolio">
      <h4>  {t('portfolioH1')}</h4>
      <h1>  {t('portfolioH2')}</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            item={item}
            active={filter.category === item.id}
            setFilter={setFilter}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <ul>
        {getSubCategory(filter.category).map((item) => (
          <li
          className="buttonList"
          active= {filter.category === item.id}
            onClick={() =>
              setFilter((filtered) => ({
                ...filtered,
                subCategory: item.id,
              }))
            }
          >
            {item.title}
            
          </li>
        ))}
      </ul>

      <div className="container">
        {data
          .filter((el) => el.subCategory === filter.subCategory)
          .map((d) => (
            <div className="item">
              <img src={d.img} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}
