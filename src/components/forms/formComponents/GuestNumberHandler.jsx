const GuestNumberHandler = ({ numOfGuests, setNumOfGuests }) => {
  const handleMinus = () => {
    if (numOfGuests <= 1) {
      return;
    }
    setNumOfGuests(--numOfGuests);
  };

  const handlePlus = () => {
    if (numOfGuests >= 10) {
      return;
    }
    setNumOfGuests(++numOfGuests);
  };

  return (
    <>
      <div
        className="guestNumberHandler"
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <div className="minusBtn">
          <button type="button" onClick={handleMinus} disabled={numOfGuests <= 1}>
            -
          </button>
        </div>
        <p className="numOfGuestsDisplay">{`${numOfGuests} people`}</p>
        <div className="plusBtn">
          <button type="button" onClick={handlePlus} disabled={numOfGuests >= 10}>
            +
          </button>
        </div>
      </div>
    </>
  );
};
// TODO: max ir min number of guests pabandyti per status
export default GuestNumberHandler;
