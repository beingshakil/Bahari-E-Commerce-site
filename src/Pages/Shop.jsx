import Cover from "../Components/Cover/Cover"
import NewCollection from "../Components/NewCollection/NewCollection"
import NewsLetter from "../Components/NewsLetter/NewsLetter"
import Offers from "../Components/Offers/Offers"
import Popular from "../Components/Popular/Popular"

const Shop = () => {
  return (
    <div>
        <Cover/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
    </div>
  )
}

export default Shop