
interface IBooks {
  // name: string,
  id: number;
  // available: boolean,
  // type: string
  author: string;
  quote: string;
}

async function Page() {
  const res = await fetch("https://dummyjson.com/quotes/random", { cache:"no-store" });//Dynamic Page 
  const books: IBooks = await res.json();

  return (
    <div className="items-center flex-col text-xl">
      
        <h1 className="text-center font-semibold text-3xl text-blue-300 p-3">
          Server Side Dynamic Rendering
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
      <p className="text-black font-semibold text-center">{books.author}</p>
    </div>
  );
}
export default Page;
