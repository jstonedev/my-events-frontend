import { API_URL } from "config/index";
import Link from "next/link";
import Layout from "components/Layout";
import EventItem from "components/EventItem";

export default function HomePage({ events }) {
	return (
		<Layout>
			<h1>Upcoming Events</h1>
			{events.length === 0 && <h3>No upcoming events</h3>}

			{events.map((evt) => (
				<EventItem key={evt.id} evt={evt} />
			))}

			{events.length > 0 && (
				<Link href='/events' className='btn-secondary'>
					View All Events
				</Link>
			)}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/events`);
	const events = await res.json();

	return {
		props: { events: events.slice(0, 3) },
		revalidate: 1,
	};
}
