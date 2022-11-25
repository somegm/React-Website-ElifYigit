import "../PortfolioLists/portfolioLists.scss";

export default function PortfolioList({id, item, active, setFilter ,setSelected}) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() =>setFilter(filtered => ({
        ...filtered,
        category: item.id,
        setselected : setSelected(id)
      }))}
    >
      {item.title}
    </li>
  );
}