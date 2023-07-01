
import data from "./../data/links"

function Links() {
  return (
    <section>
      <ul>
        {
          data.links.map(link => 
            <li key={ link.id }>{ link.name }:
              &nbsp;&nbsp;
              <a href={ link.href }>{ link.href }</a>
            </li>
          )
        }  
      </ul>
    </section>
  );
}

export default Links;
