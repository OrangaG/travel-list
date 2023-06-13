export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You have got everything! Ready to go! ✈️"
          : `💼 You have ${numItems} items on your list and you have already packed 
        ${packedItems} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
