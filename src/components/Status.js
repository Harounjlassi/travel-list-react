export default function Status({ items }) {
  if (items.length == 0)
    return (
      <footer className="stats">
        <em>Start adding some items to packing list 🚀</em>
      </footer>
    );

  //derived state
  const numItems = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItems / itemPacked) * 100);
  console.log(numItems);
  console.log(itemPacked);
  console.log(percentage);
  return (
    <footer className="stats">
      <em>
        {percentage == 100
          ? "You have everything Ready to go ✈"
          : `🧳You have ${numItems} itmes in your list, and you already packed
        ${itemPacked} ( ${isFinite(percentage) ? percentage : 0}%)`}
      </em>
    </footer>
  );
}
