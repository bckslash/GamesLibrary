import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
	document.title = "Game Library | About";

	window.scrollTo({
		top: 0,
		left: 0,
	});

	return (
		<main className="h-semiscreen">
			<Navbar />
			<section className="page">
				<div className="text-gray-300 2xl:px-80 space-y-10">
					<h1 className="text-center text-3xl font-semibold ">
						About Page
					</h1>
					<p className="text-gray-400 prose-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Exercitationem nam iste minima voluptates illo,
						assumenda quae ad iure recusandae, consequuntur quis ut
						dicta cum tempora expedita voluptas esse dignissimos.
						Odio quam et animi nihil! Qui minus in doloribus nisi?
						Eum quam ad cumque numquam voluptatem atque error rem
						deserunt velit natus laudantium sint quae quis vel
						laborum beatae, molestiae consequuntur sapiente,
						tempora, et reiciendis non sunt minus corporis?
						<br />
						<br />
						Assumenda eveniet numquam corporis cumque consectetur
						fuga dolore, dolores esse delectus rem adipisci veniam
						veritatis eum praesentium illo ducimus cupiditate eius
						nemo, vitae beatae, accusantium pariatur autem earum
						quos! Facilis accusamus suscipit voluptates consectetur
						a, consequuntur iste quia optio non tempora quae
						temporibus architecto fugit ratione dolorum reiciendis
						debitis rem? Fugiat maiores nobis quod non tempora!
						Dolorum at minima hic sunt sequi ipsum, facilis rerum.
						Doloremque exercitationem quibusdam dignissimos quod
						provident, modi numquam, explicabo dolorum ipsa dolore
						corrupti suscipit consequatur nobis quis tempora tenetur
						quidem consequuntur natus repellat, facere atque
						<br />
						<br />
						mollitia. Molestiae sint ratione iusto numquam
						cupiditate, saepe aliquam exercitationem minima nulla?
						Iure molestias illum deleniti commodi, quia saepe
						expedita! Sed totam inventore facere doloremque hic,
						voluptate veritatis quo, magnam accusamus explicabo
						harum laudantium unde maxime excepturi ex! Nemo sequi
						suscipit eaque, facilis voluptatem excepturi voluptate
						consequatur dignissimos quae placeat! Tenetur quos,
						provident asperiores voluptate temporibus quae repellat
						iusto excepturi ipsum sit nobis totam, enim officiis
						reprehenderit. Animi quibusdam minima molestiae, fuga
						deserunt repellat temporibus ullam illum culpa nihil
						maxime aspernatur nesciunt atque consequatur dolorem,
						cum facere iure asperiores dicta, magnam nostrum
						corporis exercitationem placeat tempore! Accusantium
						voluptatibus eius vitae temporibus atque similique eaque
						tenetur culpa. Voluptatum maiores eveniet porro adipisci
						magni quas assumenda, odio aliquam ipsam dolorum
						<br />
						<br />
						officiis quia rerum dicta obcaecati nesciunt ipsum
						numquam illo dignissimos sapiente repellendus totam.
						Porro quis dolor voluptate mollitia iusto perspiciatis
						illo nesciunt, animi accusamus.
					</p>
				</div>
			</section>
			<Footer />
		</main>
	);
}

export default About;
