import Entry from "./components/Entry";
import Header from "./components/Header";
import data from './data';

export default function App() {
  const entryElements = data.map((object) => {
    return <Entry
      key={object.id}
      entry={object}
    />
  })
  return(
  <>
    <Header />
    <main>
      {entryElements}
    </main>
  </>
  )
};
