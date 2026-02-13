import { cocktailLists, mockTailLists } from "../../constants"

const Cocktails = () => {

  return (
    <section id="cocktails">
        <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
        <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />

        <div className="list width-90">
            <div className="popular">
                <h2>Most Popular Cocktails</h2>
                <ul>
                    {cocktailLists.map(({name, country, detail, price}) => (
                        <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="loved">
                <h2>Most Loved Mocktails</h2>
                <ul>
                    {mockTailLists.map(({name, country, detail, price}) => (
                        <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktails