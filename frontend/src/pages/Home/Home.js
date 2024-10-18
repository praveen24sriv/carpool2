import React from "react";
import "./Home.css";

export default function Home() {
	return (
		<div className="landing-container">
			<div className="text-section">
				<h1>Simplifying Commutes</h1>
				<p>
					Streamline ride-sharing, save on travel costs, and
					contribute to a greener planet.
				</p>
				<div className="buttons">
					<button className="get-started-btn">Get Started</button>
					<button className="how-it-works-btn">How it works</button>
				</div>
			</div>
			<div className="image-section">
				<img
					src="/path/to/phone-image.png"
					alt="Phone with app interface"
					className="phone-img"
				/>
			</div>
		</div>
	);
}
