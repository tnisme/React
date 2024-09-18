import ListItem from "./ListItem";

export default function List({ data }) {
  return (
    <>
      {data.map((dt) =>
        dt.age < 35 ? (
          <ListItem key={dt.name} name={dt.name} age={dt.age} />
        ) : null
      )}
    </>
  );
}
