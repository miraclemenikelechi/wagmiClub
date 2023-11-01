import {
	PrimaryNavbar as Navbar,
	Hero,
	Club,
	PoweredBy,
	Questers,
	ReputationBoard,
	Footer,
} from "../../views";
import "./index.scss";

const Landing = () => {
	return (
		<section className="landing">
			<div className="landing__wrapper">
				{/* navbar-component */}
				<Navbar />

				<Hero group="landing" />

				{/* club component */}
				<Club group="landing" />

				<section className="landing__about">
					<div className="landing__about-wrapper">
						<p>
							build your social profile onchain <br />
							earn trustscores, <span>badges</span> & airdrop
						</p>
					</div>
				</section>

				{/* PoweredBy component */}
				<PoweredBy group={"landing"} />

				<Questers group={"landing"} />

				<ReputationBoard group={"landing"} />

				<section>sum stuff</section>

				<footer className="landing__footer">
					<Footer group={"landing"} />
				</footer>
			</div>
		</section>
	);
};

export default Landing;
