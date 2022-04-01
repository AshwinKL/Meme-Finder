import Card from "../Card/Card";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import "./Main.css";

const Main = (props) => {
  const [loader, setLoader] = useState(false);
  const [array, setArray] = useState([]);
  const [length, setLength] = useState(0);
  const removeItem = (item) => {
    const removed = array.filter((i) => i.id !== item.id);
    localStorage.setItem("meme-items", JSON.stringify(removed));
    setArray(removed);
    setLength(removed.length);
  };

  useEffect(() => {
    if (localStorage.getItem("meme-items")) {
      const stored = JSON.parse(localStorage.getItem("meme-items"));
      setArray(stored);
      setLength(stored.length);
    } else {
      const fetchResuts = async () => {
        try {
          setLoader(true);

          const res = await fetch(`https://api.imgflip.com/get_memes`);
          const response = await res.json();
          setArray(response.data.memes);
          setLength(response.data.memes.length);

          localStorage.setItem("meme-items", JSON.stringify(array));
          setLoader(false);
        } catch (e) {
          console.log(e);
        }
      };
      fetchResuts();
    }
  }, []);

  return (
    <div className="main__container">
      <div className="total">
        <p>{`Total : ${array.length}`}</p>
      </div>
      {loader ? (
        <div className="loader__div">
          <ReactLoading type="spin" color="#FCDE67" />
        </div>
      ) : (
        <div className="card__container">
          {array.map((meme) => (
            <Card meme={meme} key={meme.id} removeItem={removeItem}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
