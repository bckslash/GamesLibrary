import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
	document.title = "Game Library | About";

	React.useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, []);

	return (
		<>
			<main className="min-h-screen flex flex-col justify-between">
				<Navbar />
				<section className="page flex-1">
					<div className="text-text 2xl:px-80 space-y-10">
						<h1 className="text-center text-3xl font-semibold ">
							About Page
						</h1>
						<p className="text-gray-400 prose-lg">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Exercitationem nam iste minima voluptates
							illo, assumenda quae ad iure recusandae,
							consequuntur quis ut dicta cum tempora expedita
							voluptas esse dignissimos. Odio quam et animi nihil!
							Qui minus in doloribus nisi? Eum quam ad cumque
							numquam voluptatem atque error rem deserunt velit
							natus laudantium sint quae quis vel laborum beatae,
							molestiae consequuntur sapiente, tempora, et
							reiciendis non sunt minus corporis?
							<br />
							<br />
							Assumenda eveniet numquam corporis cumque
							consectetur fuga dolore, dolores esse delectus rem
							adipisci veniam veritatis eum praesentium illo
							ducimus cupiditate eius nemo, vitae beatae,
							accusantium pariatur autem earum quos! Facilis
							accusamus suscipit voluptates consectetur a,
							consequuntur iste quia optio non tempora quae
							temporibus architecto fugit ratione dolorum
							reiciendis debitis rem? Fugiat maiores nobis quod
							non tempora! Dolorum at minima hic sunt sequi ipsum,
							facilis rerum. Doloremque exercitationem quibusdam
							dignissimos quod provident, modi numquam, explicabo
							dolorum ipsa dolore corrupti suscipit consequatur
							nobis quis tempora tenetur quidem consequuntur natus
							repellat, facere atque accusamus.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default About;
