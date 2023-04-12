import { API_URL } from 'config/index'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Layout from 'components/Layout'

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Home</h1>
      {events.length === 0 && 
        <h3>No upcoming events</h3>
}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: {events}
  }
}
