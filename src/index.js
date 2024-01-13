import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import StarRating from "./StartRating";
// import Currency from "./Currency";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
		{/* <Currency /> */}
		{/* <StarRating maxRating={10} />
		<StarRating maxRating={8} color="red" className="test" defaultRating={5} /> */}
	</React.StrictMode>
);
