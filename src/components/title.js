
import data from "./../data/titles.json";

function Separator() {
  return (
    <span className="blue">
      &nbsp; ▪ &nbsp;
    </span>
  );
}

function Title() {
  return (
    <header className="App-header">
      <h1>Sheena Mariano</h1>
      <h4>
        {
          data.titles.map(title => 
            ( data.titles.length != title.id 
              ? <span key={title.id} >{ title.name } <Separator /></span> 
              : <span key={title.id} >{ title.name }</span>
            )
          )
        }
      </h4>
    </header>
  );
}

export default Title;
