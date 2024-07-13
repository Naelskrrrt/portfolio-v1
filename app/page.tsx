"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { useRef } from "react";
import { FaHome } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

export default function Home() {
	const stickyElement = useRef(null);

	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav
					navItems={[{ name: "Home", link: "/", icon: <FiHome /> }]}
				/>
				<Hero ref={stickyElement} />
			</div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
				ab optio, facere obcaecati ipsam corrupti repellat fugit quidem
				totam rerum asperiores voluptas harum porro architecto qui iure
				nobis ducimus fuga ratione non saepe atque illo. Consectetur
				modi perferendis autem mollitia ipsam dolore maiores in nobis
				ex, debitis ratione assumenda quaerat ut corporis vel dolorum.
				Quae eius illum repellat laboriosam non necessitatibus
				praesentium, est recusandae itaque neque voluptas aliquid
				mollitia beatae fuga consequatur nesciunt! Necessitatibus quidem
				iusto voluptatem accusamus! Magnam laboriosam suscipit vitae
				illum saepe sit! Voluptate sapiente nostrum tempora. Id possimus
				modi ipsa. Sunt neque reiciendis necessitatibus quo nulla illum
				labore dolore aliquam dolor. Error fugit doloribus, eaque
				voluptas aut a dignissimos minima. Magni minus placeat
				blanditiis, voluptas accusamus molestiae totam soluta illum
				cumque porro veniam assumenda vel doloremque? Error, itaque ab,
				iure quis explicabo earum dolor, omnis nulla voluptates fugiat
				maiores? Voluptas incidunt rerum dignissimos hic laborum
				doloribus aperiam nemo, quaerat, molestias aliquam eos in
				temporibus quo repellat nobis delectus nihil reprehenderit,
				nulla veritatis ullam. Rem illum qui ut officia commodi ad
				corrupti esse veniam quos non facilis quas nam possimus,
				obcaecati praesentium sapiente odio vitae unde voluptate
				exercitationem quaerat culpa aliquam voluptatum similique? Iste
				numquam porro quos quo nisi! Itaque sequi aperiam rem atque
				reiciendis! Dignissimos reprehenderit voluptate dolores
				consequatur nihil esse assumenda doloremque, maiores laborum
				nobis consequuntur repudiandae aspernatur ea pariatur vero,
				voluptas explicabo. Ipsa, temporibus corporis. Adipisci velit
				exercitationem repellendus expedita temporibus? Inventore
				possimus molestias itaque quisquam corrupti dolorem quam
				recusandae minus soluta. Asperiores enim qui ea! Maiores
				blanditiis aperiam quisquam aliquid eius! Nemo amet eveniet
				dolor voluptates explicabo quae. Reiciendis voluptate
				perspiciatis voluptas consequatur tempora alias aperiam enim
				repellat maxime fugit quo minima facere beatae veniam soluta
				eligendi, debitis cum illo. Obcaecati suscipit odio veniam, eos
				quod reprehenderit doloribus odit ratione eius officia! Est,
				saepe. Quidem perspiciatis pariatur blanditiis harum ipsam dicta
				dolore dolorem. Ipsam, vero ea, nesciunt dolorum assumenda
				laudantium nobis aliquid aut, sunt incidunt suscipit! Nam
				ratione, ad voluptas accusamus a minus nostrum, itaque
				reiciendis blanditiis praesentium corrupti sit ex quia est,
				fugit aut. In sed vero illum quasi magni explicabo veniam
				commodi. Qui quis quam, cupiditate tenetur consectetur odio
				rerum saepe quaerat. Eveniet aliquam aut totam aspernatur sit
				iure, autem, temporibus et, possimus molestias veritatis maxime
				ad obcaecati dolor beatae provident. Inventore impedit,
				repellendus id eius aspernatur, dicta corporis optio autem ullam
				nostrum ipsam architecto ex deserunt dolores eveniet. Excepturi
				vero recusandae voluptatum incidunt commodi debitis optio
				ducimus officia, reprehenderit consequatur modi tempora labore
				pariatur facere iure dolores neque impedit ullam, culpa odit in.
				Minus consectetur magnam sit, quam at accusamus totam maxime
				porro. Eveniet consectetur nostrum iste, impedit ipsa repellat
				in quas, magni quam dolore, veniam reprehenderit odio neque
				esse? Aperiam laboriosam aut facere blanditiis, repellat,
				voluptates rerum incidunt libero accusantium maxime totam
				impedit, voluptas perferendis nisi provident labore. Aliquid
				consequatur voluptatem sed ex maxime expedita minima. Corrupti
				magnam dolorem quo, asperiores et ad perspiciatis veritatis
				laboriosam in at ipsa fuga quas provident suscipit omnis iste
				esse illo recusandae nam minus!
			</p>
		</main>
	);
}
