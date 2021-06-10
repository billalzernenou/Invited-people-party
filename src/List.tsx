interface IsProps {
  people: {
    name: string;
    age: number;
    url?: string;
    note?: string;
  }[];
}
const List: React.FC<IsProps> = ({ people }) => {
  return <div>List</div>;
};

export default List;
