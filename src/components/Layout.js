import { Outlet,Link } from "react-router-dom"
import { CartIcon, HomeIcon } from "./Icons"

import Search from "./Search"

const Layout = ({categories}) => {

const renderCategories=()=>{
  
  return categories.data.map((c) => 
    <li key={c.id}>
      <Link to={`/categories/${c.id}`}>
        {c.title}
      </Link>
    </li>
    
    )
  }


  return (
  <>
<header>
  <div id="headerHomeIcon">
    <Link to='/'>
    <HomeIcon width={40} />
    </Link>
  </div>
  <Search />
  <div id="headerTitle">
    Our store
  </div>
  <div id="headerCartIcon">
   <Link to='/basket'>
     <CartIcon width={40} />
   </Link>
  </div>
</header>
<section>
  <nav>
    <h1>Categories</h1>
    {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}

    <ul>

    {categories.data && renderCategories()}
    </ul>
   </nav>

  <main>
   <Outlet />
  </main>
</section>


<footer>
 <Link to='/'>Home</Link> | <Link to='/basket'>Basket</Link>
</footer>

  
    </>
  )
}
export default Layout










// another way of mapping
//  const categories=[]
//  for(let i=0;i < results.length;i++){
// categories.push(<Category key={results[i].id} id={results[i].id} title={results[i].title}/>)
//  }