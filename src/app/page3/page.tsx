interface IBooks {
    // name: string,
    id: number;
    // available: boolean,
    // type: string
    author: string;
    quote: string;
  }
  
  async function ISR() {
    const res = await fetch("https://dummyjson.com/quotes/random", {
      next:{
        revalidate:5
      } // Incremental Static Regeneration
    });
    const books: IBooks = await res.json();
  
    return (
      <div className="items-center flex-col text-xl" >
          <h1 className="text-center font-semibold text-3xl text-blue-300 p-3">
           Incremental Side Regeneration
          </h1>
       
  
        {/* <ul className="p-8">
          {
            books.map((b) => {
              return (
                <li key={b.id} className="p-3 text-lg border" >
                  {b.name}
                  
                </li>
              )
            })
          }
        </ul> */}
        <p className="text-black font-semibold text-center">{books.quote}</p>
      </div>
    );
  }
  export default ISR;
  