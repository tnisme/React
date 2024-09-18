export default function Button({ action, listData }) {
  const { persons, pets } = listData;
  return (
    <>
      <button onClick={() => action(pets)}>Change data</button>
    </>
  );
}
