import Card from "./Card";

const Tours = ({ tours, deleteHandler }) => {
  return (
    <div>
      <div className="container">
        <h2 className="title">Travel With Love</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} deleteHandler={deleteHandler} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
